const headers = process.env.IS_LOCAL_DEV ? {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
} : {}


exports.handler = async event => {
  const payload = event.body
  console.log({ event, payload })

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ payload })
  }
}
