const deepstream = require('deepstream.io-client-js')
const client = deepstream('localhost:6020');

client.login({
  username: 'broCode',
  password: 'broCode13' 
}, function(success, data) {
    console.log(data);
    console.log(success)
})