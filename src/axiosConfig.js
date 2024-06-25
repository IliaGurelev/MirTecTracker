import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:7273/api'
;(axios.withCredentials = false),
  (axios.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
