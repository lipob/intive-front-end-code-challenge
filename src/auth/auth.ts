import axios from 'axios'

/**
 * This represents some generic auth provider API, like Firebase.
 */
const authProvider = {
  isAuthenticated: false,
  async signin(userLoginData: string) {
    try {
      // fake async request
      const url = `https://randomuser.me/api/`
      const { data } = await axios.get(url)

      return { data, userLoginData }
    } catch (error) {
      console.error(error)
    }
  },
  async signout(callback: VoidFunction) {
    try {
      // here we reload the page just to clear the redux state
      // replace with an async function
      window.location.reload()
      callback()
    } catch (error) {
      console.error(error)
    }
  },
}

export { authProvider }
