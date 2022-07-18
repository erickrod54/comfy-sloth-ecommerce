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

/**comfy-sloth-ecommerce app version 15 - filter_reducer
 * file - Features: 
 * 
 *      --> Building the action 'UPDATE_SORT'.                                 
 * 
 * Notes: This action will keep the value selected
 * by the user as the payload.
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

  /**here i build the 'UPDATE_SORT' action*/
  if ( action.type === UPDATE_SORT ) {
    /**i spread/copy the state and asign the 'sort' prop
     * value dynamicly to the payload -value selected-*/
    return {...state, sort: action.payload }    
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
