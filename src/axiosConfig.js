import axios from 'axios'

axios.defaults.baseURL = 'https://a28116-418d.t.d-f.pw/api'
;(axios.withCredentials = false),
  (axios.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
