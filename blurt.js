// var blurt = require('@blurtfoundation/blurtjs');
// blurt.api.setOptions({ url: 'https://blurtd.privex.io', useAppbaseApi: true });
// blurt.api.streamTransactions("head", function (err, result) {
//   console.log("Result:", result)
//   let operations = result.operations[0];
//   console.log("OPP:", operations)
//   console.log("OPP1:", operations[0])
//   console.log("OPP2:", operations[1])
//   if (typeof operations === "object") {
//     const txType = operations[0];
//     const txData = operations[1];

//     if (txType === "transfer") {
//       const { amount, from, memo, to } = txData;
//       if (to == 'beldex-hot') {
//         let checkMemo = await us
//       }
//       console.log("Tranfer Data:", txData);
//     }

//   } else {
//     console.log('operations', operations)
//   }
// });

// blurt.api.getAccounts('niyas', function(err, result) {
//     console.log(err, result);
//   });

// var blurt = require('@blurtfoundation/blurtjs');
// blurt.api.setOptions({ url: 'https://rpc.blurt.world' ,useAppbaseApi: true})
// blurt.api.getAccountHistory("beldex-hot", -1, 100, function(err, result) {
//   //console.log(result)
//   const transfers = result.filter(tx => tx[1].op[0] === 'transfer');
//   transfers.forEach((tx) => {
//     const transfer = tx[1].op[1];
//     console.log(tx[1].timestamp)
//     console.log(transfer);
//   });
// });


var blurt = require('@blurtfoundation/blurtjs');
blurt.api.setOptions({ url: 'https://rpc.blurt.world' ,useAppbaseApi: true})
console.log('https://rpc.blurt.world')
blurt.broadcast.transfer('5J7v58qMHMKW9SKuwboTdnHLabzxA68GKggsQ2kZ4kpz22XiszZ', 'beldex-hot', 'beldex-hot', "0.200 BLURT", 'AutomaticWithdrawTest', function(err, result) {
  console.log(err,result);
});

