var moment = require('moment-timezone')
var today = moment();
var tomorrow = moment('2021-01-01').tz('Asia/Kolkata').format();
console.log(tomorrow)