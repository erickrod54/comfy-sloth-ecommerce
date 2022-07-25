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

/**comfy-sloth-ecommerce app version 24 - filter_context
 * file - Features: 
 * 
 *      --> Refactoring 'updateFilters' to convert
 *          'price' after the user action in a 
 *          number.
 * 
 *      --> Refactoring 'updateFilters' to asign
 *          dymanicly the value 'checked' - true or
 *          false to the shipping-   
 * 
 *      --> Dispathing 'clearFilters' action.                                    
 * 
 * Notes: for the 'price' is use the ES6 method 'Number()' 
 * that converts the strings in number, and for 'shipping'
 * 'e.target.checked' to asign dynamicly the value -true
 * or false- to the shipping prop 
*/

/*here is the 'initialState' */
const initialState = {
  /**props for the products */
  filtered_products: [],
  all_products: [],

  /**prop for the 'Sort' > 'ListView' - 'GridView' */
  grid_view:true,

  /**default prop for the 'Sort' > 'select form'*/
  sort:'price-lowest',

  /**filter values */
  filters:{
    text:'',
    company:'all',
    category:'all',
    color:'all',
    min_price:0,
    max_price:0,
    price:0,
    shipping:false,
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {

  /**i destrcture the products from the 'useProductsContext()'*/
  const { products } = useProductsContext()

  /**here is the state to dispatch the actions */
  const [ state, dispatch ] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products})
  }, [products])

  /**here i trigger the useEffect to dispatch the action
   * when 'products' get mount */
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  } 

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  /**here i build the 'updateSort' feature
   * i use the 'e' -event target to get it
   * from the user-*/
  const updateSort = (e) => {
    //for demosntration
    //const name = e.target.name
    
    /**here i get the value, to set the payload */
    const value = e.target.value
    /**here i dispatch the action */
    dispatch({ type: UPDATE_SORT, payload: value})

    //console.log('the value selected ==>', value)
  }

  const updateFilters = (e) => {
      let name = e.target.name
      let value = e.target.value
      
      /**here i refactor to get the 
       * text of the button */
      if (name === 'category') {
        value = e.target.textContent
      }
      if (name === 'color') {
        value = e.target.dataset.color
      }
      if (name === 'price') {
        value = Number(value)
      }
      if (name === 'shipping') {
        value = e.target.checked
      }
      dispatch({ type: UPDATE_FILTERS, payload:{ name, value }})
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
