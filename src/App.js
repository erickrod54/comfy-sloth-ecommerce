import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';

import { HomePage, SingleProductPage, CartPage, 
CheckoutPage, ErrorPage, AboutPage, PrivateRoute, AuthWrapper} from './pages'
import ProductsPage from './pages/ProductsPage';

/**comfy-sloth-ecommerce app version 39 - App js file
 * - Features: 
 * 
 *      --> Updating to react-router-v6
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
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/products/:id' element={<SingleProductPage />}/>
          <Route path='/checkout' element={<HomePage />}/>
          
          {/**this way i implement privateRoute in react
           * router version 6*/}
          <Route path='/' element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
    
    </>
  )
}

export default App
