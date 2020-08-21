const ytlist = require('youtube-playlist')

const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}

exports.handler = async (event, context) => {
  try {
    const { id } = event.queryStringParameters

    if (!id) {
      return { statusCode: 500, headers, body: 'Param id required' }
    }

    const url = `https://www.youtube.com/playlist?list=${id}`
    const { data } = await ytlist(url, 'url')
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data })
    }
  } catch (err) {
    return { statusCode: 500, headers, body: err.toString() }
  }
}
