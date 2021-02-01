const _ = require('lodash')
var currency = [{asset:"BTC"},{asset:"DASH",name:"uuuu"}]
var trade = [{asset:"BTC",name:"funn"},{asset:"LTC",name:"hhh"}]

var presents = _.intersectionBy(currency, trade,'asset');
console.log(presents)
var dif = _.differenceWith(currency, trade);
//console.log(dif)

//console.log(currency.filter(e => !trade.includes(e)));
//console.log(currency.filter(e=> trade.indexOf(e) < 0))

console.log()
