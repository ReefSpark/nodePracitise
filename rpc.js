// const httpClient = require('urllib');
// const url = 'http://35.247.150.55:19097/json_rpc';
// let username = 'beldex-official'
// let password = 'c7vMBy3yvStKfpspe9C29qeTCZwMUT'
// const options = {
//   method: 'POST',
//   // auth: "username:password" use it if you want simple auth
//   digestAuth: "beldex-official:c7vMBy3yvStKfpspe9C29qeTCZwMUT",
//   headers: {
//     'Content-Type': 'application/json',
//     "Authorization": "Basic" + username + ":" + password
//   },
//   body: JSON.stringify({
//     "jsonrpc": "2.0",
//     "id": "0",
//     "method": "get_transfers",
//     "params": { "in": true, "account_index": "0" }
//   })
// };
// const responseHandler = (err, data, res) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(res.statusCode);
//   console.log(res.headers);
//   console.log(data.toString('utf8'));
// }
// httpClient.request(url, options, responseHandler)

// const DigestFetch = require('digest-fetch')
// //const client = new DigestFetch('beldex-official','c7vMBy3yvStKfpspe9C29qeTCZwMUT', { basic: true })
// const client = new DigestFetch('beldex-official', 'c7vMBy3yvStKfpspe9C29qeTCZwMUT', { algorithm: 'MD5' }) 
// const options = {
//   method: 'POST',
//   body: {
//     "jsonrpc": "2.0",
//     "id": "0",
//     "method": "get_transfers",
//     "params": {"in":true,"account_index":"0"}
//   }
// }
// const url = 'http://35.247.150.55:19097/json_rpc'
// client.fetch(url,options)
//   .then(resp=>console.log("Response:",resp))
//   .then(data=>console.log(data))
//   .catch(e=>console.error(e))

// const curl =  require('curl')
// let body={
//       "jsonrpc": "2.0",
//       "id": "0",
//       "method": "get_transfers",
//       "params": {"in":true,"account_index":"0"}
//     }

// curl.post("http://35.247.150.55:19097", body, function(err, response, body) {
//   console.log("Respone:",response)
// });

// async function message(){
//   const { curly } = require('node-libcurl')
//   const { data } = await curly.post('http://35.247.150.55:19097/json_rpc', {
//     postFields: JSON.stringify({"jsonrpc": "2.0",
//     "id": "0",
//     "digestAuth": "beldex-official:c7vMBy3yvStKfpspe9C29qeTCZwMUT",
//     "method": "get_transfers",
//     "params": {"in":true,"account_index":"0"}}),
//     httpHeader: [
//       'Content-Type: application/json',
//       'Accept: application/json'
//     ],
//   })

//   console.log(data)
// }
// message()
// const request = require('request')
// let body ={
//       "jsonrpc": "2.0",
//       "id": "0",
//       "method": "get_transfers",
//       "params": { "in": true, "account_index": "0" }
//     }
// var options = {
//   url: 'http://35.247.150.55:19097/json_rpc',
//   //digestAuth: "beldex-official:c7vMBy3yvStKfpspe9C29qeTCZwMUT",
//   headers: {
//       accept: 'application/json',
//       'Content-Type': 'application/json'
//   },
//   body: body,
//   json: true
// };
// request.post(options, function(err, res, body){
//   if(body.error){
//      console.log("body.error:",body.error)
//   } else {
//       console.log(err, body.result);
//   }
//});
const request = require('request-promise');
const http = require('http');
let hostname = 'localhost', port = 'port', user = 'username', pass = 'password'
async function rpcCurl(method, params) {
  try {
    let options = {
      forever: true,
      json: { 'jsonrpc': '2.0', 'id': '0', 'method': method },
      agent: new http.Agent({
        keepAlive: true,
        maxSockets: 1
      })
    };

    if (params) {
      options['json']['params'] = params;
    }

    options['auth'] = {
      'user': user,
      'pass': pass,
      'sendImmediately': false
    }
    let response = await request.post(`http://${hostname}:${port}/json_rpc`, options);
    if (response) {
      if (response.hasOwnProperty('result')) {
        return response.result;
      } else {
        return response;
      }
    }
  } catch (err) {
    console.log(err.message)
  }


};
rpcCurl("get_transfers", { "in": true, "account_index": 0 })
