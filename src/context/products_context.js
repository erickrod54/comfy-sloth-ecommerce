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

/**comfy-sloth-ecommerce app version 1 - products_context 
 * file - Features: 
 * 
 *      --> Building State. -to dispatch actions-
 * 
 * Notes: this is going to be use to implement the sidebar
 * confitional checkout
*/

const initialState = {}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)


  return (
    <ProductsContext.Provider value='products context'>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
