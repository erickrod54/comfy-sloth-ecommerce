import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

/**comfy-sloth-ecommerce app version 31 - cart_context
 * file - Features: 
 * 
 *      --> Dispatching 'COUNT_CART_TOTALS' action.
 * 
 * Notes: the 'COUNT_CART_TOTALS' has been dispatched from 
 * the form the useEffect where the 'state.cart' changes 
 * are saved on 'localStorage' - so this value will persist
 * to-
*/

/**here i build 'getLocalStorage'*/
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');

  if (cart) {
    /**i parse the item */
    return JSON.parse(localStorage.getItem('cart'))
  }else{
    /**if no 'cart' i return empty array*/
    return[]
  }
}

/**adding the 'cart', 'total_items', 
 * 'total_amount', 'shipping_fee' */
const initialState = {
  /**'getLocalStorage' will trigger as 'cart' 
   * value*/
  cart: getLocalStorage(),
  total_items:0,
  total_amount:0,
  shipping_fee:534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  // remove item 
  /**here i dispatch the action and the 'id' as a payload*/
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload:id })
  }

  //toggle
  /**this 'id' is the value of the 'id' of the 
   * item added to the cart 'id + color' 
   * reference to ==> cart_reducer js file */

  const toggleAmount = (id, value) => {
    console.log('the id is ==>', id, 'and the value is ==>', value)
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload:{ id, value }})
  }
  
  //clear cart
  /**here i just dispatch the action */
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  //add to cart
  const addToCart = ( id, color, amount, product ) => {
    dispatch({type: ADD_TO_CART, payload: { id,color,amount, product }})
  }

  /**depending on the 'state.cart' changes i set 'localStorage'
   * to the 'state.cart' value */
  
  /**here i'll dispatch the action to set the 'total_items' 
   * cart value*/
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{
                            ...state,
                            addToCart,
                            removeItem,
                            toggleAmount,
                            clearCart
                            }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
