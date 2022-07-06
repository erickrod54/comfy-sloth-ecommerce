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

/**comfy-sloth-ecommerce app version 3 - products_context 
 * file - Features: 
 * 
 *      --> Getting products data from the API.
 * 
 *      --> Testing the the data is getting right
 * 
 * Notes: In order to build 'FeaturesProducts' Component and
 * also the products specifics Component i use axios the get
 * the data and right away test it.
 * 
 *i have two end points - url to get the data -, the first will
 * get me all the products and the second single product
 * this url's are already set on utils > constants
*/

const initialState = {
  isSidebarOpen: true,
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
    const response = await axios.get(url)
    /**i log it to test it */
    console.log(response)
  }

  /**here i invoque the fetch */
  useEffect(() => {
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
