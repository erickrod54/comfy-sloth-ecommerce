import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**comfy-sloth-ecommerce app version 32 - PrivateRoute
 * Page - Features: 
 * 
 *      --> Destructuring 'user' from 
 *         'useAuth0()' .
 * 
 *      --> Setting 'user' to render 'children' or
 *          'homePage'
 * 
 * Notes: Also i have to make changes to private route
 * in order to check directly to 'useAuth0' user props
 * and display the children - that will be checkout page-
 * 
*/

const PrivateRoute = ({ children, ...rest }) => {
  
  const { user } = useAuth0()

  /**here i can test it */
  //console.log('the children are ==>',children)
  //console.log('the rest is ==>', rest)
  
  return(
    <Route {...rest} render={() => { 
      return user ? children : <Redirect to='/'></Redirect>
    }}></Route>
  )
};
export default PrivateRoute;
