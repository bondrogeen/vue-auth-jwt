import General from './General'

export default ($axios) => ({
  get: General.get($axios),
  post: General.post($axios),
  update: General.update($axios),
  delete: General.delete($axios),
  put: General.put($axios),
})