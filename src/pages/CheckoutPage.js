import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 33 - 'CheckoutPage'
 * Component - Features: 
 * 
 *      --> Connecting 'CheckoutPage' with
 *          'StripeCheckout' Component.
 * 
 * Notes: the communication to proceed to payments will
 * be as this: 
 *  
 *  --> 'CheckoutPage' > 'StripeCheckout'  
 *      > 'functions/payments' > Stripe Servers
 * 
 * 'CheckoutPage' --> will verify based on the cart and
 * render a message 'your cart is empty' or the 
 * 'StripeCheckout' Component
 * 
 * 'StripeCheckout' --> will handle the payment info 
 * with the stripe UI and communicate with a serveless
 * function   
 * 
 * functions/payments' --> will handle the payment info
 * to send it securely to 'Stripe Servers'
 * 
 * The communication must be this way because is extremily 
 * dangerous to communicate directly with stripe - is
 * exposing all the payments information-
 * 
*/
const CheckoutPage = () => {

  const { cart } = useCartContext()

  return(
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        { cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              Fill it
            </Link>
          </div> 
        ) :
        (<StripeCheckout />)
        }
      </Wrapper>
    </main>
    )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty{
    text-align: center;
  }
`
export default CheckoutPage
