
var speakeasy = require('speakeasy');

var verified = speakeasy.totp.verify({ secret: 'Tk?>;^V(AyWQi#>ZN)>yiSH@rAO?t?0x',
    encoding: 'ascii',
    token: '978805' });
console.log(verified)
