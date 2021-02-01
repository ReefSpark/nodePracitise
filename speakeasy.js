var speakeasy = require('speakeasy');

// GENERATE KEY

var QRCode = require('qrcode');
var secret = speakeasy.generateSecret({
    name:"Waste"
});
console.log(secret)

QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {
    console.log(data_url);
});

// VERIFIY KEY

