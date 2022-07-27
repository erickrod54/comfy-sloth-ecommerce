import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

/**comfy-sloth-ecommerce app version 27 - cart_context
 * file - Features: 
 * 
 *      --> Building the 'addToCart' feature.
 * 
 * Notes: the 'ADD_TO_CART' action will have the payload
 * of 'id','color','amount', 'product'
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

  //add to cart
  const addToCart = ( id, color, amount, product ) => {
    dispatch({type: ADD_TO_CART, payload: { id,color,amount, product }})
  }
  return (
    <CartContext.Provider value={{
                            ...state,
                            addToCart
                            }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
