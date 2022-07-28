import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

/**comfy-sloth-ecommerce app version 27 - cart_context
 * file - Features: 
 * 
 *      --> Building the 'ADD_TO_CART' action.
 *          -initial setup-
 * 
 * Notes: This initial setup let me add the 'newItem'
 * to the cart array and i can check on chrome > Components
 * > CartProviver
 * 
 *  the 'id + color' is use to set conditions because the
 * same item can have different colors so what makes an
 * item unique when's being added is 'id + color'
*/

const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload;
    
    /**this is to check that the item exits already in 
     * the cart */
    const tempItem = state.cart.find((i) => i.id === id + color )

    /**then i use it to set a two conditions */
    if (tempItem) {
      /**i iterate over the current 'cart' */
      const tempCart = state.cart.map((cartItem) => {
        /**first case the id 'match' - 'id' and 'color' 
         * because this is the cart item 'id'-*/
        if (cartItem.id === id + color) {
          
          /**then being the case i change/update the amount */
          let newAmount = cartItem.amount + amount;

          /**as i check the 'amount' i check th stock
           * -the 'max' prop is the product stock-*/
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          /**once match i over writte using the 'newAmount' */
          return { ...cartItem, amount: newAmount}
          
        } else {
          /**second case i simply return the cartItem, if
           * the id does not match*/
          return cartItem
        }
      })
      
      /**then i just overwrite the whole cart using 'tempCart' */  
      return { ...state, cart: tempCart}
    }else{
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image:product.images[0].url,
        price:product.price,
        max:product.stock,

      }
      return {...state, cart:[...state.cart, newItem]}
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
