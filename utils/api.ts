import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://192.168.254.183/hazardtrack-api',
  headers: {
    'Content-Type': 'application/json',
  },
})
