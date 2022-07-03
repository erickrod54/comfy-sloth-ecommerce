import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

/**comfy-sloth-ecommerce app version 1 - index js file
 * - Features: 
 * 
 *      --> Wrapping 'App' using 'ProductsProvider'
 *          in order to provide products data and 
 *          features.
 * 
 * Notes: this is going to be use to implement the sidebar
 * confitional checkout
*/

ReactDOM.render(
<ProductsProvider>
    <App />
</ProductsProvider>, 

document.getElementById('root')
)
