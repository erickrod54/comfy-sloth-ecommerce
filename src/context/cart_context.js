import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

/**comfy-sloth-ecommerce app version 29 - cart_context
 * file - Features: 
 * 
 *      --> Building persistance using 'localStorage'
 *          with useEffect for the 'cart' data.
 * 
 * Notes: The 'localStorage' is the browser API that 
 * i am going to use to create persistance, when i add
 * items to the cart i want to keep them even if i refresh
 * the page - unless i removeItem -
 * 
 * the main goal of this version is to save the cart state
 * in the 'localStorage' API
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
  const removeItem = (id) => {}

  //toggle
  const toggleAmount = (id, value) => {}
  
  //clear cart
  const clearCart = () => {}

  //add to cart
  const addToCart = ( id, color, amount, product ) => {
    dispatch({type: ADD_TO_CART, payload: { id,color,amount, product }})
  }

  /**depending on the 'state.cart' changes i set 'localStorage'
   * to the 'state.cart' value */
  useEffect(() => {
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
