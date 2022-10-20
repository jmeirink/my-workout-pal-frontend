import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    // remove the user from state
    localStorage.removeItem("user")

    // dispatch logout action
    dispatch({type: "LOGOUT"})
  }

  return {logout}
}