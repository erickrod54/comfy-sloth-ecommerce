import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

/**comfy-sloth-ecommerce app version 26 - index js file
 * - Features: 
 * 
 *      --> Wrapping 'App' using 'CartProvider'
 *          in order to provide products data and 
 *          features from 'ProductsProvider' and
 *          'FilterProvier' to 'CartProvider'.
 * 
 * Notes: the 'ProductsProvider' provides > FilterProvider and 
 * both provides all the '<App />'
 * 
 * There is an action 'LOAD_PRODUCTS' specially made with the 
 * propouse to provide the 'products' from 'ProductsProvider' 
 * to 'FilterProvider' 
*/

ReactDOM.render(
<ProductsProvider>
    <FilterProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </FilterProvider>
</ProductsProvider>, 

document.getElementById('root')
)
