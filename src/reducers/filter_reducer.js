import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

/**comfy-sloth-ecommerce app version 11 - filter_reducer
 * file - Features: 
 * 
 *      --> Building the action LOAD_PRODUCTS                                 
 * 
 * Notes: the props that in the 'filter_context'
 * file were empty arrays initially, now they 
 * are going to be filled by the 'action.paylod'
 * - products - once the 'useEffect' is triggered
*/

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
      return {...state, all_products:[...action.payload], 
              filtered_products: [...action.payload]}    
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
