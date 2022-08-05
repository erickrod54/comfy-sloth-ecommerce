import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';

import { HomePage, Products, SingleProductPage, CartPage, 
CheckoutPage, ErrorPage, AboutPage, PrivateRoute} from './pages'
import ProductsPage from './pages/ProductsPage';

/**comfy-sloth-ecommerce app version 31 - App js file
 * - Features: 
 * 
 *      --> Implementing 'PrivateRoute' to 'Chekout' page.
 * 
 * Notes: This implementation will be develop in 'PrivateRoute'
 * in order to protect the checkout page from freely access.
*/

function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route exact path='/about'>
            <AboutPage />
          </Route>

          <Route exact path='/cart'>
            <CartPage />
          </Route>

          <Route exact path='/products'>
            <ProductsPage />
          </Route>

          <Route 
            exact path='/products/:id' 
            children={<SingleProductPage />} />

          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>

          <Route exact path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    
    </>
  )
}

export default App
