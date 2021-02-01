const apiServices = require('./app');

async function okexAutoWithdraw( filterFee, client) {
    try {
        const authClient = client;
        let payload = Object.assign({}, {
            "amount": 20,
            "fee": filterFee.min_fee,
            "trade_pwd":"Qwertypoiu@123",
            "destination": 4,
            "currency": filterFee.currency.toLowerCase(),
            "to_address":"0x258B7B9A1BA92f47f5F4f5e733293477620a82Cb"
        })
        console.log('Payload:', payload)
        console.log(`Response:${new Date()} : `, payload)
        // let response = await authClient.account().postWithdrawal(payload);
        // console.log('OkexResponse:',response)
        // if (response.status || response.result) {
        //     return { status: true }
        // }
        return { status: false, error: "Something went wrong" }
    } catch (error) {
        return { status: false, error: error }
    }
}

async function withdraw(){

    const result = await apiServices.okexRequest()
    if (!result.status) {
       console.log("Error:",result.error)
    }
    console.log("result:",result);
    let okexFee = await getWithdawalFee(result.result,'BAT');
    console.log("Fee:",okexFee)
    if (okexFee.length != 0) {
        let putWallet = await okexAutoWithdraw(okexFee[0], result.result)
        if (!putWallet.status) {
            // transactionDetails.status = "1";
            // transactionDetails.updated_date = moment().format('YYYY-MM-DD HH:mm:ss')
            // await transactionDetails.save();
            // return res.status(400).json(this.errorMsgFormat({
            //     "message": putWallet.error
            // }, 'withdraw'));
        }
        console.log('Result:',putWallet);
    }
    return
}

async function getWithdawalFee(client, asset) {
    const authClient = client;
    console.log("Clent:",client)
    let response = await authClient.account().getWithdrawalFee(asset.toLowerCase());
    return response;
}

withdraw()
