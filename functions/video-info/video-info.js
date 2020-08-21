const axios = require('axios')
const key = process.env.YOUTUBE_API_KEY

const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}

exports.handler = async function (event, context) {
  try {
    const { id } = event.queryStringParameters

    if (!id) {
      return { statusCode: 500, headers, body: 'Param id required' }
    }

    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`
    )
    if (!data.items || data.items.length === 0) {
      return { statusCode: 500, body: 'Video not found' }
    }
    const video = data.items[0].snippet

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        video
      })
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
