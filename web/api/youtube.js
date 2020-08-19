const axios = require('axios')
const express = require('express')
const ytlist = require('youtube-playlist')

const app = express()
const key = process.env.YOUTUBE_KEY

app.get('/playlist', async (req, res) => {
  const { id } = req.query

  if (!id) { return res.send('Param id required') }

  const url = `https://www.youtube.com/playlist?list=${id}`
  const { data } = await ytlist(url, 'url')
  res.send(200, { data })
})

app.get('/playlist/full', async (req, res) => {
  const { id } = req.query
  console.log({id})
  if (!id) { return res.send('Param id required') }

  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=${key}&maxResults=50`
  )

  const playlist = data.items.map(i => i.snippet)
  res.send(200, {
    pageInfo: data.pageInfo,
    playlist
  })
})

app.get('/info', async (req, res) => {
  const { id } = req.query

  if (!id) { return res.send('Param id required') }

  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`
    )
    const video = data.items[0].snippet
    res.send(200, video)
  } catch (error) {
    console.error(error)
    res.send({ error })
  }
})

export default {
  path: '/api/youtube',
  handler: app
}
