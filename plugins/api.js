import createRepository from '~/api'

export default (ctx, inject) => {
  inject('api', createRepository(ctx.$axios))
}
