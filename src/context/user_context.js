import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

/**comfy-sloth-ecommerce app version 32 - user_context js file
 * - Features: 
 * 
 *      --> Triggering 'useEffect' on 'user'
 *          value to set 'myUser' to user 
 *         'value'
 * 
 * Notes: the user value comes fro Auth0, i am checking with
 * useAuth0 props in three places 'user_context', 'AuthWrapper',
 * and 'PrivateRoute'
*/

const UserContext = React.createContext()


export const UserProvider = ({ children }) => {

  /**here i destructure props from useAuth0() 
   * -Auth0 object-*/
  const { loginWithRedirect, 
          logout, user } = useAuth0()

  /**here i build the state for the 'myUser' 
   * -this will be use to flip login and logout
   * button on the CartButtons Component- */        
  const [ myUser, setMyUser ] = useState(null)


  /**triggering 'useEffect' on 'user'
   * value to set 'myUser' to user 'value'*/
  useEffect(() => {
    setMyUser(user)
  }, [user])

  return (
    <UserContext.Provider value={{
      loginWithRedirect,
      logout,
      myUser
    }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
