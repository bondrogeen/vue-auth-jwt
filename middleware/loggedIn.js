export default function ({ $auth, redirect }) {
  console.log($auth.$state)
  if ($auth.$state.loggedIn) {
    redirect('/')
  }
}
