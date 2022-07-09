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

/**comfy-sloth-ecommerce app version 6 - products_context 
 * file - Features: 
 * 
 *      --> Building state values for single_product
 *          on 'initialState'.
 * 
 *      --> Building 'fetchSingleProduct' to request
 *          the single_product data to the API.
 * 
 *      --> Providing throght the provider
 *          'fetchSingleProduct'                 
 * 
 * Notes: The 'fetchSingleProduct' dispatch action for begin
 * the request, the success request, and the error just in case
 * , these actions are defined on the reducer.
*/

/**here i add 'products_loading','products_error',
  *'products', 'featured_products' to handle the data
  * request */
const initialState = {
  isSidebarOpen: true,

  /**state values for products -featuredProducts-*/
  products_loading: false,
  products_error: false,
  products: [],
  featured_products:[],

  /**state values for single product */
  single_product_loading:false,
  single_product_error:false,
  single_product: {},
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

  const fetchSingleProduct = async(url) => {
      dispatch({type: GET_SINGLE_PRODUCT_BEGIN});

      try {
        const response = await axios.get(url)
        const singleProduct = response.data;
        console.log('this is the data result of the fetch ==> ',singleProduct)
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, 
                  payload: singleProduct })
      } catch (error) {
         dispatch({type:GET_SINGLE_PRODUCT_ERROR}) 
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
        closeSidebar,
        fetchSingleProduct
      }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
