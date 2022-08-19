import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

/**comfy-sloth-ecommerce app version 33 - CartButtons 
 * Component - Features: 
 * 
 *      --> Destructuring 'clearCart' feature
 *          from 'useCartContext' 
 * 
 *      --> Setting the clearCart() to clean
 *          the cart when the user logout.
 * 
 * Notes: the specific code and method for 'login' and
 * 'logout' are: 
 * 
 *   login --> loginWithRedirect -take to
 *              auth0 login page-
 * 
 *   logout--> 
 *     () => logout({returnTo:window.location.origin})
 * 
*/
const CartButtons = () => {

  const { closeSidebar } = useProductsContext()
  /**here i destructure 'clearCart' */
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext();

  //console.log('I received the closeSidebar on CartButtons ==>', closeSidebar)
  return(
    <Wrapper className='cart-btn-wrapper'>
      {/**here i trigger 'closeSidebar'*/}
      <Link to='/cart' 
            className='cart-btn' 
            onClick={closeSidebar}>
        <span className='cart-container'>
          Cart
          <FaShoppingCart />
          <span className='cart-value'>
            {total_items}
          </span>
        </span>
      </Link>
      {/**implementing ternary operator i flip
       * between 'login' and 'logout'*/}

      {/**this line 'returnTo:window.location.origin' 
       * comes directly from the Auth0 documentation
       * in order to logout from the 'user'*/}

       {/**i set it up as a function and include
        * the clearCart() feature */}
      { myUser ? 
      <button type='button' 
        className='auth-btn' 
        onClick={() => {
          clearCart()
          logout({returnTo:window.location.origin})} 
        }>
        logout <FaUserMinus />
      </button>
      :
      <button type='button' 
        className='auth-btn' 
        onClick={loginWithRedirect}>
        Login <FaUserPlus />
      </button>
     }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
