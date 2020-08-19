const express = require('express')
const ytlist = require('youtube-playlist')

const app = express()

app.get('/youtube', async (_, res) => {
  console.log('asdf')
  const url = 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704';
  const { data } = await ytlist(url, 'url')
  res.send({ data })
})

export default {
  path: "/api",
  handler: app
}
