export default {
  get: ($axios) => (path, data) => {
    return $axios.get(`${path}/`, data)
  },
  post: ($axios) => (path, data) => {
    return $axios.post(`${path}/`, data)
  },
  update: ($axios) => (path, data) => {
    return $axios.update(`${path}/`, data)
  },
  delete: ($axios) => (path, data) => {
    return $axios.delete(`${path}/`, null, data)
  },
  put: ($axios) => (path, data) => {
    return $axios.put(`${path}/`, data)
  },
}
