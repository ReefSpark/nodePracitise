const fs = require('fs')
let result = [
    [
        "jebasingh1995@yahoo.com",
        "INR",
        "90",
        "0"],
    [
        "jebasingh1995@yahoo.com",
        "INR",
        "90",
        "0"]
]


async function writFile() {
    let header = ['email', 'asset', 'available', 'freeze'].join('\t')
    let i = 0;
    while (i < result.length) {
        await fs.writeFileSync('./balance.csv', header + '\n' + result[i].join('\n'), 'utf-8');
        i++
    }
   
}

writFile()




