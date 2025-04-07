import axios from 'axios'

const PROXY_URL = 'http://localhost:3001/api'

const api = axios.create({
  baseURL: PROXY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const searchTracks = async (query) => {
  try {
    const response = await api.get(`/search?q=${encodeURIComponent(query)}`)
    return response.data
  } catch (error) {
    console.error('Error searching tracks:', error)
    throw error
  }
}

export const getTrack = async (id) => {
  try {
    const response = await api.get(`/track/${id}`)
    return response.data
  } catch (error) {
    console.error('Error getting track:', error)
    throw error
  }
}

export const getArtist = async (id) => {
  try {
    const response = await api.get(`/artist/${id}`)
    return response.data
  } catch (error) {
    console.error('Error getting artist:', error)
    throw error
  }
}

export const getAlbum = async (id) => {
  try {
    const response = await api.get(`/album/${id}`)
    return response.data
  } catch (error) {
    console.error('Error getting album:', error)
    throw error
  }
}

export const getTopTracks = async () => {
  try {
    const response = await api.get('/chart/0/tracks')
    return response.data
  } catch (error) {
    console.error('Error getting top tracks:', error)
    throw error
  }
}