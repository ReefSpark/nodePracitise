const crypto = require('crypto');
const buttervalue = Buffer.from("uyewdbnyjsyedord");
const iv = Buffer.from('+cjqs&#t67Ch+mPS');

async function decrypt(data) {
        try {
            let hash = crypto.createHash('sha256').update('+cjqs&#t67Ch+mPS').digest('base64').substr(0, 32);
            let cipher = crypto.createDecipheriv('aes-256-ctr', hash, iv)
            let secret = cipher.update(data, 'hex', 'utf8')
            secret += cipher.final('utf8');
            return secret;
        }
        catch (err) {
            return res.send(this.errorMsgFormat({ message: "Your request was not encrypted." })).status(400);
        }

    }
let secret = decrypt('');
console.log(secret)