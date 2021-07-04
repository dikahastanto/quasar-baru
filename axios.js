import { boot } from 'quasar/wrappers'
import axios from 'axios'

// penjelasan lebih lengkap baca disini ya
// https://quasar.dev/quasar-cli/ajax-requests#introduction
const baseURL = 'http://localhost:3000'
const axiosInstance = axios.create({ baseURL: baseURL })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axiosInstance
  app.config.globalProperties.$baseImageURL = baseURL
})

export { axios }
