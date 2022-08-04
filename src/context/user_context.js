import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

/**comfy-sloth-ecommerce app version 31 - user_context js file
 * - Features: 
 * 
 *      --> Destructuring props from useAuth0() 
 *       -Auth0 object-
 * 
 *      --> Building state for 'myUser' to 
 *          flip the 'user' state -user come
 *          from Auth0-.
 * 
 *      --> Triggering 'useEffect' on 'isAuthenticated'
 *        value to set 'myUser'
 * 
 *      --> Providing data and features throught 
 *          the provider.
 * 
 * Notes: I destructure props from useAuth0() 
 * -Auth0 object previously placed to wrap
 * the whole application-
 * 
 *  
*/

const UserContext = React.createContext()


export const UserProvider = ({ children }) => {

  /**here i destructure props from useAuth0() 
   * -Auth0 object-*/
  const { isAuthenticated, loginWithRedirect, 
          logout, user, isLoading } = useAuth0()

  /**here i build the state for the 'myUser' 
   * -this will be use to flip login and logout
   * button on the CartButtons Component- */        
  const [ myUser, setMyUser ] = useState(null)


  /**triggering 'useEffect' on 'isAuthenticated'
   * value to set 'myUser' to user 'value'*/
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)
    }else{
      setMyUser(false)
    }
  }, [isAuthenticated])

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
