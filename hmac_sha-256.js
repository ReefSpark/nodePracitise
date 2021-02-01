


var crypto = require('crypto');
//creating hmac object 
//let input ="order_price = 345.90&order_tag=BDXU1F0D05&order_quantity=0.05&order_type=LIMIT&side=SELL&symbol=SPOT_ETH_USDT|1603436134307"
let input = {
    "entity": "event",
    "account_id": "acc_EnbH0KSxAyZniv",
    "event": "payment.captured",
    "contains": [
        "payment"
    ],
    "payload": {
        "payment": {
            "entity": {
                "id": "pay_EncIEhvFuIoJ9I",
                "entity": "payment",
                "amount": 49900,
                "currency": "INR",
                "status": "captured",
                "order_id": "order_EncHzzi3wdb9zt",
                "invoice_id": null,
                "international": false,
                "method": "card",
                "amount_refunded": 0,
                "refund_status": null,
                "captured": true,
                "description": "Thank you for nothing. Please give us some money",
                "card_id": "card_EncIEnwnpUqEVW",
                "card": {
                    "id": "card_EncIEnwnpUqEVW",
                    "entity": "card",
                    "name": "Mehul",
                    "last4": "1111",
                    "network": "Visa",
                    "type": "debit",
                    "issuer": null,
                    "international": false,
                    "emi": false
                },
                "bank": null,
                "wallet": null,
                "vpa": null,
                "email": "sdfdsjfh2@ndsfdf.com",
                "contact": "+9134234324234",
                "notes": {
                	"order_id":"56789"
                },
                "fee": 998,
                "tax": 0,
                "error_code": null,
                "error_description": null,
                "error_source": null,
                "error_step": null,
                "error_reason": null,
                "created_at": 1588887134
            }
        }
    },
    "created_at": 1588887136
}
var hmac = crypto.createHmac('sha256', 'qA6gM5gH4tH3hI9p');

//passing the data to be hashed
data = hmac.update(JSON.stringify(input));
//Creating the hmac in the required format
gen_hmac= data.digest('hex');
//Printing the output on the console
console.log("hmac : " + gen_hmac);



