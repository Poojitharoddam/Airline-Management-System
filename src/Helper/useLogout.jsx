import { useAuthContext } from "./../auth/useAuthContext"


export const useLogout =() =>{
  const {dispatch} = useAuthContext()
  const logout = () =>{
    localStorage.removeItem("user")
    dispatch({type:'logout'})
  }
  return {logout}
}