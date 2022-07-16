import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

/**comfy-sloth-ecommerce app version 13 - filter_context
 * file - Features: 
 * 
 *      --> Adding 'grid_view' to initialState.                                 
 * 
 * Notes:This value is going to be use on the 'ProductList'
 * to change the products view from 'grid' to a 'list'.
 * 
 * As i am spreading the state the prop added will be provided.
*/

/**by the initial state will be empty
 * arrays and later will be filled with
 * the context 'products' data*/
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view:true
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {

  /**i destrcture the products from the 'useProductsContext()'*/
  const { products } = useProductsContext()

  /**i tested, just to check that i obtained an array -very important
   * read 'filter_reducer notes'- */
  console.log('these are the products i got on filter_context ==>', products)

  /**here i build the state for the reducer -i don't fill the 
   * state yet- */
  const [ state, dispatch ] = useReducer(reducer, initialState)

  /**i implement the "useEffect" because will trigger once i have
   * been provided by 'ProductsProvider' the 'products' value
   * also i set it as dependency array.
  */
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products})
  }, [products])

  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
