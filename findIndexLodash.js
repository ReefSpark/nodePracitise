const _ = require('lodash')
let fees = [
    {
        "config": "makerFeeRate",
        "value": "0.002"
    },
    {
        "config": "takerFeeRate",
        "value": "0.002"
    }
]

let takerFee = fees[_.findIndex(fees, { config: 'takerFeeRate' })]
let makerFee = fees[_.findIndex(fees, { config: 'makerFeeRate' })]
