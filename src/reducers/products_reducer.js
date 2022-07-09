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

/**comfy-sloth-ecommerce app version 6 - products_reducer 
 * file - Features: 
 * 
 *      --> Building 'GET_SINGLE_PRODUCT_BEGIN,'
 * 
 *      --> Building 'GET_SINGLE_PRODUCT_SUCCESS'
 *   
 *      --> Building 'GET_SINGLE_PRODUCT_ERROR'
 * 
 * Notes: These actions will handle the way i can
 * obtain the 'singleProduct' data, so far to the
 * previous versions i can visualize the single
 * ptoduct by his id, this version as i said 
 * handles the data
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

/**Here i build the action 'GET_SINGLE_PRODUCT_BEGIN' 
 * this action will handle the fetch request form the API*/
if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true, 
            single_product_error: false}
}

/**Here i build the action  'GET_SINGLE_PRODUCT_SUCCESS'
 * to handle when i already get the data form the API*/
if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  return { ...state, single_product_loading:false, 
          single_product: action.payload }
}

/**Here i build the action 'GET_SINGLE_PRODUCT_ERROR'
 *the error action is a 'flip' of success prop values */
if (action.type === GET_SINGLE_PRODUCT_ERROR ) {
  return { ...state, single_product_loading: false, 
          single_product_error: true}
}
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
