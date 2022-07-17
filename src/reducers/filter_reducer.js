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

/**comfy-sloth-ecommerce app version 14 - filter_reducer
 * file - Features: 
 * 
 *      --> Building the action 'SET_GRIDVIEW'.
 * 
 *      --> Building the action 'SET_LISTVIEW'.                                 
 * 
 * Notes: These actions must be build sequentially
 * as the 'grid' triggers first - the icons order
 * in Sort Component - it goes first and so on 
 * with 'SET_LISTVIEW' action.
*/

const filter_reducer = (state, action) => {
  
  if (action.type === LOAD_PRODUCTS) {
      return {...state, all_products:[...action.payload], 
              filtered_products: [...action.payload]}    
  }

  /**here i build the 'SET_GRIDVIEW' action*/
  if (action.type === SET_GRIDVIEW) {
    /**i spread/copy the state and switch the grid_value 
     * to 'true'*/
    return {...state, grid_view:true }
  }

  /**here i build the 'SET_LISTVIEW' action*/
  if (action.type === SET_LISTVIEW) {
    /**i spread/copy the state and switch the grid_value 
     * to 'false'*/
    return {...state, grid_view:false } 
  }

  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
