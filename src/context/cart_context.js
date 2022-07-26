import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

/**comfy-sloth-ecommerce app version 26 - cart_context
 * file - Features: 
 * 
 *      --> Building the 'initialState'.
 * 
 *      --> Building state to dispatch actions.
 * 
 *      --> Providing the state throught the 
 *          provider. 
 * 
 * Notes: the values of the initial state they are
 * going to be filled by the user interaction with 
 * the cart, the shipping_fee value is in cents
 * 
*/

/**adding the 'cart', 'total_items', 
 * 'total_amount', 'shipping_fee' */
const initialState = {
  cart:[],
  total_items:0,
  total_amount:0,
  shipping_fee:534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{...state}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
