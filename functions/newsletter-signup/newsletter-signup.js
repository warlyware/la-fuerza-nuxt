const axios = require('axios')
const ConstantContact = require('node-constantcontact');
const apiKey = process.env.CONSTANT_CONTACT_API_KEY
const accessToken = process.env.CONSTANT_CONTACT_ACCESS_TOKEN
const cc = new ConstantContact({
  apiKey,
  accessToken
})

exports.handler = async function(event, context) {
  try {
    const data = await cc.campaigns.find({ email: 'danward@gmail.com' });

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
