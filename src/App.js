import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';

import { HomePage, Products, SingleProductPage, CartPage, 
CheckoutPage, ErrorPage, AboutPage, PrivateRoute, AuthWrapper} from './pages'
import ProductsPage from './pages/ProductsPage';

/**comfy-sloth-ecommerce app version 32 - App js file
 * - Features: 
 * 
 *      --> Wrapping using 'AuthWrapper' the whole 
 *          application.
 * 
 * Notes: AuthWrappper and PrivateRoute will handle the 
 * checkout page display - in previous version were redirecting
 * to 'homepage' because it was checking our local user (
 * reference to user_context )-
 * 
*/

function App() {
  return(
    <>
    <AuthWrapper>

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
    </AuthWrapper>
    
    </>
  )
}

export default App
