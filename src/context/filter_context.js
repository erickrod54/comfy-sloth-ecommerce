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

/**comfy-sloth-ecommerce app version 11 - filter_context
 * file - Features: 
 * 
 *      --> Building the initial state with 
 *          two value props 'filtered_products',
 *          'all_products'.
 * 
 *      --> Destructuring the 'products' data
 *          from the 'useProductsContext'.
 * 
 *      --> Building the state for the
 *          Reducer -this version focus
 *          on the dispatch 
 *          (the action)-                                  
 * 
 * Notes: Is very impportant to check three things
 * 
 *  first --> to check the log of the products
 *            destructured -must be an array-
 * 
 *  second --> this 'filter_context' must be
 *             wrapped by the context that it
 *              need the values - products-
 *              is the 'ProductsProvider'.
 * 
 *  Third --> on the reducer by building the 
 *            action that has the payload
 *            - products - LOAD_PRODUCTS
 *            that the array is filling 
 *            with a copy of the payload
 *            - spread the action.payload-
*/

/**by the initial state will be empty
 * arrays and later will be filled with
 * the context 'products' data*/
const initialState = {
  filtered_products: [],
  all_products: []
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
    <FilterContext.Provider value='filter context'>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
