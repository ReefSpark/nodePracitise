const accountSid = 'AC52e7294da41ece238d49399ca869f095';
const authToken = 'af53e68e1e0038b9130a5c9ad7491e4e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello sarada I love you?',
     from: '+1 408 703 5694',
     to: '+917598051721'
   })
  .then(message => console.log(message.sid));