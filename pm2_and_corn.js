var crontab = require('node-crontab');

var jobId = crontab.scheduleJob("1 * * * * *", function(){

//This will call this function every 15 minutes

console.log("It's been 15 minutes!");
});