import axios from 'axios'

const { BASE_URL } = process.env

export const getYtPlaylist = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/api/youtube/playlist/full?id=${id}`
  )
  return data
}
