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

/**comfy-sloth-ecommerce app version 2 - products_context 
 * file - Features: 
 * 
 *      --> Building the initial state for 'isSidebarOpen'.
 * 
 *      --> Building state to handle toggle 'Sidebar' 
 *          action dispatch.
 * 
 *      --> Building 'openSidebar' in order to dispatch
 *          the action to open the sidebar.
 * 
 *      --> Building 'closeSidebar' in order to dispatch
 *          the action to close the sidebar. 
 * 
 *      --> Spreading state and functionalities throught
 *          the provider.
 * 
 * Notes: for each functionality the 'type' defined is
 * going to be accessed by the 'reducer' in order to 
 * build the action dispatached here.
 * 
 * and the functionalities are going to be triggered by
 * the components that need it ( Sidebar Component, and
 * Navbar Component ) -these functionalies gives the
 * sidebar behavior-
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
