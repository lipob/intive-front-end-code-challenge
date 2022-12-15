/**
 * This represents some generic auth provider API, like Firebase.
 */
const authProvider = {
  isAuthenticated: false,
  async signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true
    setTimeout(callback, 2000) // fake async
  },
  async signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false
    setTimeout(callback, 1000)
  },
}

export { authProvider }
