const axios = require('axios')
const SANITY_API_URL = 'https://pb0hrpvr.api.sanity.io/v1/data/query/production?'

const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}


exports.handler = async event => {
  const payload = event.body

  const created = payload.ids.created
  const deleted = payload.ids.deleted
  let query

  if (created.length) {
    query = `
      *[_id == "${created[0]}"][0] {
        _type
      }
    `
  } else if (deleted.length) {
    query = `
      *[_id == "${deleted[0]}"][0] {
        _type
      }
    `
  }

  const qs = encodeURIComponent(query)
  const url = `${SANITY_API_URL}query=${qs}`
  const { data } = await axios.get(url)
  console.log({ payload, data })

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ payload, data })
  }
}
