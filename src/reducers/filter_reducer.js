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

/**comfy-sloth-ecommerce app version 16 - filter_reducer
 * file - Features: 
 * 
 *      --> Building 'SORT_PRODUCTS' action in order
 *          to trigger each action from the 'selection 
 *          form' - programaticlly approach -                                
 * 
 * Notes: this programaticlly approach use ES6 methods as 'sort',
 * and 'localeCompare'
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

  if (action.type === SORT_PRODUCTS ) {
    /** 'a' is previous element, and 'b' next element
     * applying 'sort' method */
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a,b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a,b) => b.price - a.price)
    }
    /** 'a' is previous element, and 'b' next element
     * applying 'localeCompare' method */
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a,b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {...state, filtered_products: tempProducts}
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
