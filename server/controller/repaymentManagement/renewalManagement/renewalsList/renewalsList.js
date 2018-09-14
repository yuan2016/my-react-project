/**
 * Created by Administrator on 2017/7/12.
 */
let sql = require('../../../../sql/sqlMap')
let func = require('../../../../sql/func')
let moment = require('moment')
let tableName = require('../../../../config/tableName')
let {analysis, mosaic, formatCurrency, formatInt} = require('../../../../utils/utils')

function formatData (rows) {
  return rows.map(row => {
    if (row.repayment_time) {
      row.repayment_time = moment(row.repayment_time).format('YYYY-MM-DD HH:mm:ss')
    }
    if (row.sum_fee) {
      row.sum_fee = formatCurrency(row.sum_fee)
    }
    if (row.repayment_interest) {
      row.repayment_interest = formatCurrency(row.repayment_interest)
    }
    if (row.renewal_fee) {
      row.renewal_fee = formatCurrency(row.renewal_fee)
    }
    if (row.renewal_day) {
      row.renewal_day = formatInt(row.renewal_day)
    }
    return row
  })
}

module.exports = {

  //用户通讯录数据
  fetchAll (req, res) {
    let params = req.body
    let queries = analysis(params, 't1.repayment_time', 'w')
    let add = mosaic(params, 'status', 't1')
    if (queries) {
      add = ' and ' + add
    } else {
      add = ' where ' + add
    }
    let order = params.order || ''
    let query = sql.repaymentManagement.renewalsList.selectAllFront + queries + add + order + sql.repaymentManagement.renewalsList.selectAllBack
    func.connPool2(query, [tableName.renewalsList.t1, tableName.renewalsList.t, params.offset, params.limit], function (err, rs) {
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
  //用户通讯录总条数
  getCount (req, res) {
    let params = req.body
    let queries = analysis(params, 't1.repayment_time', 'w')
    let add = mosaic(params, 'status', 't1')
    if (queries) {
      add = ' and ' + add
    } else {
      add = ' where ' + add
    }
    let query = sql.repaymentManagement.renewalsList.getCount + queries + add
    func.connPool2(query, [tableName.renewalsList.t1, tableName.renewalsList.t], function (err, rs) {
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
  }
}
/**
 * Created by Administrator on 2017/7/10.
 */

