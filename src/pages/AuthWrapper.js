import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

/**comfy-sloth-ecommerce app version 32 - AuthWrapper Component
 * - Features: 
 * 
 *      --> Building 'AuthWrapper' page
 * 
 * Notes: this page is made in order to solve the bug that
 * does not let the user go to checkout page
 * 
 * So what AuthWrapper does is checking directly with 'isloading'
 * and 'error' - direct props from useAuth0 - in order to render 
 * the 'children' that will be the whole app - because is wrapping
 * everything in app js file -
*/

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return(
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    )
  }
  if (error) {
    return(
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    )
  }

  return(
    <>{children}</>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
