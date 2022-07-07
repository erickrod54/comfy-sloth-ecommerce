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

/**comfy-sloth-ecommerce app version 4 - products_reducer 
 * file - Features: 
 * 
 *      --> Building 'GET_PRODUCTS_SUCCESS' action.
 * 
 *      --> Building 'GET_PRODUCTS_SUCCESS' action.
 * 
 * Notes: for the 'action.type' 'GET_PRODUCTS_SUCCESS'
 * this is going to get me all the products, but
 * i'll filter by 'featured' prop on 'true'.
 * 
 * As i sue filter i'm creating a completely
 * new array - featured_products -
 * 
 * For c i just change the state 
 * of the props to display the error.
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
if (action.type === GET_PRODUCTS_BEGIN) {
  return { ...state, products_loading: true }
}

if (action.type === GET_PRODUCTS_SUCCESS ) {
  /**for featured products, i filter the products
   * with the 'featured' prop 'true'*/
  const featured_products = action.payload.filter(
    (product) => product.featured === true )

  return {...state,
           products_loading: false,
           products:action.payload, 
          featured_products }
}

/**Fot the error i deactivate the 'loading' and
 * change the 'products_error' state to 'true'*/
if (action.type === GET_PRODUCTS_ERROR ) {
  return {...state, products_loading:false, 
    products_error: true}
}
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
