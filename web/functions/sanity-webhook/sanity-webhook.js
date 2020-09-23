const axios = require('axios')
const SANITY_API_URL = 'https://pb0hrpvr.api.sanity.io/v1/data/query/production?'

const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}


exports.handler = async event => {
  const payload = JSON.parse(event.body)
  const created = payload.ids ? payload.ids.created : []
  const deleted = payload.ids ? payload.ids.deleted : []
  console.log({ payload, ids: payload.ids, created, deleted })

  let query

  if (created.length) {
    query = `
      *[_id == "${created[0]}"][0] {
        _type
      }
    `
  // } else if (deleted.length) {
  //   query = `
  //     *[_id == "${deleted[0]}"][0] {
  //       _type
  //     }
  //   `
  }

  const qs = encodeURIComponent(query)
  const url = `${SANITY_API_URL}query=${qs}`
  const { data } = await axios.get(url)
  if (deleted.length || data.result && (data.result._type === 'tip' || data.result._type === 'book')) {
    console.log('Kicking off rebuild!')
    axios.post('https://api.netlify.com/build_hooks/5f18aaba5cb587849eac43a1')
  }
  console.log({ payload, data })

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ payload, data })
  }
}
