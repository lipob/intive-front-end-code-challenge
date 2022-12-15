import axios from 'axios'

/**
 * This represents some generic auth provider API, like Firebase.
 */
const authProvider = {
  isAuthenticated: false,
  async signin(userLoginData: string) {
    // fake async request
    try {
      const url = `https://randomuser.me/api/`
      const { data } = await axios.get(url)

      return { data, userLoginData }
    } catch (error) {
      console.error(error)
    }
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false
    callback()
  },
}

export { authProvider }
