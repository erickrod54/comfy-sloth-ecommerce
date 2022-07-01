/**comfy-sloth-ecommerce app version 1 - pages/index js file
 * - Features: 
 * 
 *      --> Importing and exporting the page Components
 *          form this directory.
 * 
 * Notes: This approach makes look clean the code when i have 
 * to finally import these components in the destination file,
 * otherwise doing it by the usual way the header will be too
 * long and dificult to read.
 * 
 *  these components are going to be impoorted by 'App' js
*/
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AuthWrapper from './AuthWrapper';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ErrorPage from './ErrorPage';
import PrivateRoute from './PrivateRoute';
import ProductPage from './ProductsPage';
import SingleProductPage from './SingleProductPage';

export { 
    HomePage,
    AboutPage,
    AuthWrapper,
    CartPage,
    CheckoutPage,
    ErrorPage,
    PrivateRoute,
    ProductPage,
    SingleProductPage
}