import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

const clientID = `${process.env.REACT_APP_CLIENT_ID}`
const domainAuth = `${process.env.REACT_APP_DOMAIN_AUTH}`

/**comfy-sloth-ecommerce app version 31 - index js file
 * - Features: 
 * 
 *      --> Setting up 'Auth0Provider' to provide 
 *          authentication to the 'App'. 
 * 
 *      --> Placing the 'UserProvider' to wrap the whole
 *          application.
 * 
 * Notes: In order to set up with the development enviroment
 * the 'AUTH0' to start the authentication -eventually i'll
 * come back and set the netlify production url once the
 * app development is done-, first i log in on the AUTH0
 * account and then look up the application and after get
 * the CLIENT-ID and DOMAIN
 * 
 * The 'clientID' and 'domainAuth' are set as enviroment
 * variables is very important to create '.env' file in
 * the root directory -usually next to gitignore- and
 * use the prefix 'REACT_APP' before the name as it follows
 * for the domain 'REACT_APP_DOMAIN_AUTH', the logs made
 * on this file are for troubleshoot the enviroment
 * variables after created and check that i really have 
 * them
 * 
 * i set the URI in three places 'Allowed Callback URLs',
 * 'Allowed Logout URLs', 'Allowed Web Origins' - this 
 * same place will be modify after i get my netlify
 * production url- 
*/

/**steps to troubleshoot the enviroment variables*/

/**1st - i log the .env and check that i have the variables */
//console.log('the variables env are ==>', process.env)

/**2nd - i log the .env.REACT_APP_VARIABLE_NAME and check the variable log */
//console.log(`the REACT_APP_DOMAIN_AUTH is ==>, ${process.env.REACT_APP_DOMAIN_AUTH}`)

ReactDOM.render(
    <Auth0Provider
    domain={domainAuth}
    clientId={clientID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
>
<UserProvider>
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterProvider>
    </ProductsProvider> 

</UserProvider>
</Auth0Provider>,
document.getElementById('root')
)
