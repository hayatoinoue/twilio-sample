const config = require('dotenv').config().parsed;
const twilio = require('twilio');

const client = new twilio(config.ACCOUNT_SID, config.AUTH_TOKEN);

client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: config.PHONE_NUMBER_TO,
    from: config.PHONE_NUMBER_FROM
})
.then(call => console.log(call.sid));
