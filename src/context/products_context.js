import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

/**comfy-sloth-ecommerce app version 5 - products_context 
 * file - Features: 
 * 
 *      --> Testing the 'Error' Component           
 * 
 * Notes: This Component has been placed on the 
 * 'FeaturedProducts' Component and will show an error
 * when we don't get the data right, to test it:
 * 
 *      `${url}s` on the useEffect.
*/

/**here i add 'products_loading','products_error',
  *'products', 'featured_products' to handle the data
  * request */
const initialState = {
  isSidebarOpen: true,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products:[],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN})
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE})
  }

  /**here i fetch using axios the products */
  const fetchProducts = async(url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })

    /**here i set the try-catch. */
    try {
      const response = await axios.get(url)

      /**i pull the data */
      const products = response.data;
      /**i dispatch the action to get the products */
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      /**just in case, i dispatch the action to handle the
       * error*/
      dispatch({ type: GET_PRODUCTS_ERROR })
    }

  }

  /**here i invoque the fetch */
  useEffect(() => {
    /**to test the error Component `${url}s` */
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider 
      value={{
        ...state,
        openSidebar,
        closeSidebar
      }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
