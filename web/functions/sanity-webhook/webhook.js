// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'zv292tg5',
//   dataset: 'production',
//   token: process.env.SANITY_TOKEN
// })

exports.handler = async function (event, _, callback) {
  const { payload } = JSON.parse(event.body)
  console.log({ payload })
  // const result = await client.create({ _type: 'submission.form', ...payload })
  callback(null, {
    statusCode: 200
  })
}
