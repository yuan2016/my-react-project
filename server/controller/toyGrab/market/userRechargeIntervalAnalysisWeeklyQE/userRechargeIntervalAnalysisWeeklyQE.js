let sql = require('../../../../sql/sqlMap')
let func = require('../../../../sql/func')
let moment = require('moment')
let tableName = require('../../../../config/tableName')
let {formatCurrency, formatInt, analysis, mosaicName} = require('../../../../utils/utils')
let shell = require('../../../../config/shell')
let pro = require('child_process')
let path = require('path')
let fs = require('fs')
let XLSXWriter = require('xlsx-writestream')

function formatData (rows) {
  return rows.map(row => {
    if (row.modified_time) {
      row.modified_time = moment(row.modified_time).format('YYYY-MM-DD HH:mm:ss')
    }
    if (row.avg_money) {
      row.avg_money = formatCurrency(row.avg_money)
    }
    if (row.recharge) {
      row.recharge = formatInt(row.recharge)
    }
   /* if (row.avg_coin) {
      row.avg_coin = formatCurrency(row.avg_coin)
    }*/
    return row
  })
}

function formatExcelData (rows) {
  return rows.map(row => {
    if (row['平均充值金额(元)']) {
      row['平均充值金额(元)'] = formatCurrency(row['平均充值金额(元)'])
    }
    if (row.充值次数) {
      row.充值次数 = formatInt(row.充值次数)
    }
   /* if (row.平均充值币) {
      row.平均充值币 = formatCurrency(row.平均充值币)
    }*/
    return row
  })
}

module.exports = {
  fetchAll (req, res) {
    let params = req.body
    let year = '',
        week = '',
        queries = ''
    if (params.startTime[0]) {
      year = moment(params.startTime[0]).format('YYYY')
      week = moment(params.startTime[0]).format('WW')
      queries = 'where d_year=' + year + ' and d_week=' + week
    }
    let order = params.order || sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.order
    let query = sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.selectAll + queries + order + sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.selectAllBack
    func.connPool1(query, [tableName.userRechargeIntervalAnalysisWeekly, params.offset, params.limit], function (err, rs) {
      if (err) {
        console.log('[query] - :' + err)
        if (err.message === 'Query inactivity timeout') {
          res.json({
            code: '1024'
          })
        } else {
          res.json({
            code: '404'
          })
        }
        return
      }
      rs = formatData(rs)
      res.json(rs)
    })
  },
  getCount (req, res) {
    let params = req.body
    let year = '',
      week = '',
      queries = ''
    if (params.startTime[0]) {
      year = moment(params.startTime[0]).format('YYYY')
      week = moment(params.startTime[0]).format('WW')
      queries = 'where d_year=' + year + ' and d_week=' + week
    }
    let query = sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.getCount + queries
    func.connPool1(query, [tableName.userRechargeIntervalAnalysisWeekly], function (err, rs) {
      if (err) {
        console.log('[query] - :' + err)
        if (err.message === 'Query inactivity timeout') {
          res.json({
            code: '1024'
          })
        } else {
          res.json({
            code: '404'
          })
        }
        return
      }
      res.json(rs)
    })
  },
  getExcelData (req, res) {
    let params = req.query
    let year = '',
      week = '',
      queries = ''
    if (params.startTime) {
      year = moment(params.startTime).format('YYYY')
      week = moment(params.startTime).format('WW')
      queries = 'where d_year=' + year + ' and d_week=' + week
    }
    let query = sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.selectAllExcel + queries + sql.toyGrab.market.userRechargeIntervalAnalysisWeekly.order
    func.connPool1(query, [tableName.userRechargeIntervalAnalysisWeekly], function (err, rs) {
      if (err) {
        console.log('[query] - :' + err)
        if (err.message === 'Query inactivity timeout') {
          res.json({
            code: '1024'
          })
        } else {
          res.json({
            code: '404'
          })
        }
        return
      }
      rs = formatExcelData(rs)
      let fileName = mosaicName()
      let currFilePath = path.join(process.cwd(), fileName)
      let options = {
        headers: {
          'Content-Disposition': 'attachment; filename=' + fileName
        }
      }
      let writer = new XLSXWriter(fileName, {})
      let wirteStream = fs.createWriteStream(fileName)

// After instantiation, you can grab the readstream at any time.
      writer.getReadStream().pipe(wirteStream)
      for (let i of rs) {
        writer.addRow(i)
      }
      writer.finalize()
      wirteStream.on('finish', function () {
        // finish
        res.sendFile(currFilePath, options, function () {
          if (err) {
            console.log(err)
            res.sendFile(path.join(process.cwd(), 'error.html'))
            return
          } else {
            console.log('Sent:', fileName)
            fs.unlink(currFilePath, function (err) {
              if (err) console.log(err)
              console.log('文件删除成功')
            })
          }
        })
      })
    }, 180000)
  }
}
