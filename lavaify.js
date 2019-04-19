const extract = require('lavascript')
const through = require('through2')

module.exports = function (file) {
  return through(function (buf, enc, next) {
    this.push(extract(buf.toString('utf8')))
    next()
  })
}
