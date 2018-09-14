let func = require('../../sql/func')
let moment = require('moment')
let path = require('path')
let fs = require('fs')

module.exports = {
  fetchAll(req, res) {
    let params = req.body
    let query = 'select * from ??'
    func.connPool1(query, 'Persons', function (err, rs) {
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
  getCount(req, res) {
    let params = req.body
    let query = 'select count(*) from ??'
    func.connPool1(query, 'Persons', function (err, rs) {
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
