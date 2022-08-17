import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

/**comfy-sloth-ecommerce app version 32 - cart_context
 * file - Features: 
 * 
 *      --> Fixing ADD_TO_CART warning.
 * 
 *      --> Fixing cart_reducer warning by returning 
 *          the item.
 * 
 * Notes: Using reduce over the 'cart' state i'll 
 * calculate the 'total_items' and the 
 * 'total_amount'
 */

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
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
  /**here i build the 'REMOVE_CART_ITEM' action*/
  if ( action.type === REMOVE_CART_ITEM ) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload )
    return { ...state, cart: tempCart}
  }
  /**here i build the 'CLEAR_CART' action*/
  if (action.type === CLEAR_CART ) {
    return { ...state, cart: [] }
  }
  /**here i build the 'TOGGLE_CART_ITEM_AMOUNT' to 'increase' 
   * and 'decrease' the 'item' units in the 'cart'*/
  if (action.type === TOGGLE_CART_ITEM_AMOUNT ) {
    const { id, value } = action.payload;

    /**the 'item' is inside the 'tempCart' */
    const tempCart = state.cart.map((item) => {
      /**i first check the id */
      if (item.id === id) {
        /**then i have two chances - 'inc' and 'dec'- */

        /**for 'increase' */
        if (value === 'inc') {
          /**i add 1 to the 'amount' */
          let newAmount = item.amount + 1;
          /**i also check the stock */
          if (newAmount > item.max) {
            /**i set to the max */
            newAmount = item.max
          }
          /**i spread the 'item', update the 'amount' */
          return { ...item, amount: newAmount } 
        }
        /**for decrease 'dec' */
        if (value === 'dec') {
          /**i decrease 1 to the amount*/
          let newAmount = item.amount - 1;
          /**i check to the amount lower than 1 */
          if (newAmount < 1 ) {
            /**i set it in 1 */
            newAmount = 1
          }
          /**i spread the 'item', update the 'amount' */ 
          return { ...item, amount: newAmount }
        }
      }
      /**here i return the item to fix 'cart_reducer' warning */
      return item
    })
    /**i spread the state and the cart value will
     * be 'tempCart'*/
    return { ...state, cart: tempCart}
  }
  if (action.type === COUNT_CART_TOTALS) {
    /**i destructure 'total_items' -items units- and 'total_amount' -amount of prices-*/
    const { total_items, 
           total_amount } = state.cart.reduce((total,cartItem) => {
            /**here i destructure the 'amount' and 'price' 
             * from the 'carItem'*/
            const { amount, price } = cartItem;
            /**i acummulate the 'amount' of prices*/
            total.total_items += amount;
            /**i acumulate the 'total_amount' of items units*/
            total.total_amount += price * amount;
            /**i return it */
            return total
    }, {
      total_items:0, total_amount:0
    })
    /**and i update it in the state for both props */
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
