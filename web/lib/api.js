import axios from 'axios'

const { API_BASE_URL } = process.env

export const getYtPlaylist = async id => {
  const { data } = await axios.get(
    `${API_BASE_URL}/playlist-full?id=${id}`
  )
  return data
}
