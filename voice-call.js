let plivo = require('plivo');
let client = new plivo.Client('MAYJHKZWY4NZYZY2RIOD','ODZhODc0OWYxNGViNjU0YmMwMDZjZmI3MmVkOWQ0');
 
client.calls.create(
  '+918838812433',
  '+919884531683',
  'http://answer.url'
).then(function(call_created) {
  console.log(call_created)
});