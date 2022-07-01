import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';

import { HomePage, Products, SingleProductPage, CartPage, 
CheckoutPage, ErrorPage, AboutPage, PrivateRoute} from './pages'
import ProductsPage from './pages/ProductsPage';

/**comfy-sloth-ecommerce app version 1 - pages/index js file
 * - Features: 
 * 
 *      --> Importing page Components
 *          form pages directory using an index file.
 * 
 *      --> Building Routing for the different pages.
 * 
 * Notes: This approach makes look clean the code when i have 
 * to finally import these components in the destination file,
 * otherwise doing it by the usual way the header will be too
 * long and dificult to read.
*/

function App() {
  return(
    <>
      <h4>comfy sloth starter</h4>
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

          <Route exact path='/checkout'>
            <CheckoutPage />
          </Route>

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
