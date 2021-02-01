var WebSocket = require('ws');
var ws1 = new WebSocket('wss://ws.beldex.io/bnbbtc@depth');
// ws1.onopen =()=>
// {
//     console.log("Web Socket connected");
//     console.log("ReadyState:",ws1.readyState);
//     ws1.send(JSON.stringify({id: 2, method: "depth.subscribe", params:["ETHBTC",50,'0'] }))
// }       
ws1.onmessage =(event)=>
{
    console.log("Event:",event);
}
  

// let url = 'wss://stream.binance.com:9443/ws/bdxbtc@depth';
// let sock = new WebSocket(url);
// sock.on('message', async function (event) {
//     console.log("Event:",event);
// });