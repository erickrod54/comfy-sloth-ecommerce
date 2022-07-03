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

/**comfy-sloth-ecommerce app version 2 - products_reducer 
 * file - Features: 
 * 
 *      --> Building 'action.type: SIDEBAR_OPEN'.
 * 
 *      --> Building 'action.type: SIDEBAR_CLOSE'.
 * 
 * Notes: These actions will handle the toggle feature 
 * for the 'Sidebar' Component.
*/

const products_reducer = (state, action) => {
  
  /**i spread the state, and add the state value
   * that changes*/
  if (action.type === SIDEBAR_OPEN) {
      return {...state, isSidebarOpen: true}
  }
  
  /**i spread the state, and add the state value
   * that changes*/
  if (action.type === SIDEBAR_CLOSE) {
    return {...state, isSidebarOpen: false}
}
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
