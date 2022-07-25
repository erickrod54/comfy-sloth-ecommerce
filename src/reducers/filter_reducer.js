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

/**comfy-sloth-ecommerce app version 24 - filter_reducer
 * file - Features: 
 * 
 *      --> Building 'CLEAR_FILTERS' action.                            
 * 
 * Notes: the 'CLEAR_FILTERS' action is going to
 * come back the filters state props to the 
 * 'initialState' 
*/

const filter_reducer = (state, action) => {
  
  if (action.type === LOAD_PRODUCTS) {
    /**here i map the products */
    let maxPrice = action.payload.map((p) => p.price)
    /**here i use ES6 'Math.max' to get the max price 
     * from the 'maxPrice' array */
    maxPrice = Math.max(...maxPrice)
    //console.log('the max price ==>', maxPrice)
      return {...state, all_products:[...action.payload], 
              filtered_products: [...action.payload],
              filters: {...state.filters, max_price: maxPrice, price: 
              maxPrice},
            }    
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
      tempProducts = tempProducts.sort((a,b) => {
        /**lowest place first */
        if (a.price < b.price) {
          return -1
        }
        /**highest place after */
        if (a.price > b.price) {
          return 1
        }
        /**stays in the same place */
        return 0
      })
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
  /**here i build 'UPDATE_FILTERS' action*/
  if ( action.type === UPDATE_FILTERS ) {
    const { name, value } = action.payload
    return { ...state, filters:{...state.filters, [name]:value}}
  }
  if (action.type === FILTER_PRODUCTS ) {
    console.log('filtering products')
    return {...state}
  }
  if (action.type === CLEAR_FILTERS) {
    /**i spread/copy the 'state'; The 
     * 'state.filters' is to access to
     * the 'state.filters.max_price' and set
     * it to the 'price' prop as default 
    */
    return { 
      ...state, 
      filters: {
        ...state.filters,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price: state.filters.max_price,
        shipping:false,
      }
    }
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
