const moment = require('moment');


setInterval(() => {
    var d = new Date('2019-07-16T08:59:20.000Z');

    let time = d.getSeconds()
    console.log(time);
    let duration = moment.duration(moment().diff('2019-07-16T08:59:20.000Z'));
    console.log("Minute:",duration.asMinutes());
    console.log("Second:",duration.asSeconds());
    if (time > duration.asSeconds()) {
        console.log("Yes");
    }
    else {
        console.log("Error");
    }

})