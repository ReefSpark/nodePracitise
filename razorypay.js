const Razorpay = require('razorpay');

async function generateOrder(){
    const razorpay = new Razorpay({
        key_id: 'rzp_test_tODJ67QtwOmBbQ',
        key_secret: 'JdJazyAgdzUpGWGXayeEO0SC'
    })
      const payment_capture = 1
      const amount = 499
      const currency = 'INR'
    
      const options = {
          amount: amount * 100,
          currency,
          receipt: "receipt#21",
          notes:{
              "id":"1234566"
          },
          payment_capture
      }
    
      try {
          const response = await razorpay.orders.create(options)
          console.log(response)
        //   res.json({
        //       id: response.id,
        //       currency: response.currency,
        //       amount: response.amount
        //   })
      } catch (error) {
          console.log(error)
      }
}
generateOrder()
 