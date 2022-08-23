import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**comfy-sloth-ecommerce app version 39 - PrivateRoute
 * Page - Features: 
 * 
 *      --> Taking off the '..rest'
 * 
 *      --> Depending of the 'user' it
 *          will 'Navigate' to the 
 *         'HomePage' 
 * 
 * Notes: the taking off the '..rest' is because
 * the checkout will be directly children of this
 * route component
 * 
*/

const PrivateRoute = ({ children }) => {
  
  const { user } = useAuth0()

  if (!user) {
    return <Navigate to='/'/>
  }
  return children;
}

export default PrivateRoute;
