import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 2 - 'CheckoutPage'
 * Component - Features: 
 * 
 *      --> Building basic 'Checkout' page.
 * 
 * Notes: this basic 'Checkout' page is built in order
 * to test 'PageHero' Component
*/

const CheckoutPage = () => {
  return(
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>checkout here</h1>
      </Wrapper>
    </main>
    )
}
const Wrapper = styled.div``
export default CheckoutPage
