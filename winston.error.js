
var appRoot      = require('app-root-path');

const { createLogger, format, transports } = require('winston');
const { combine, splat, timestamp, printf } = format;

const myFormat = printf( ({ level, message, timestamp , ...metadata}) => {
  let msg = `${timestamp} [${level}] : ${message} `  
  if(metadata) {
	msg += JSON.stringify(metadata)
  }
  return msg
});

const logger = createLogger({
  level: 'error',
  format: combine(
	format.colorize(),
	splat(),
	timestamp(),
	myFormat
  ),
  transports: [
	new transports.Console({ level: 'info' }),
	new transports.File({ filename:`${appRoot}/logs/app.log` , level: 'error' }),
  ]
});
module.exports = logger