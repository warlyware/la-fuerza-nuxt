const axios = require('axios')
const key = process.env.YOUTUBE_API_KEY

const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}

exports.handler = async function(event, context) {
  try {
    const { id } = event.queryStringParameters

    if (!id) {
      return { statusCode: 500, headers, body: 'Param id required' }
    }

    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=${key}&maxResults=50`
    )

    const playlist = data.items.map(i => ({ ...i.snippet, id: i.snippet.resourceId.videoId }))

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        pageInfo: data.pageInfo,
        playlist
      })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
