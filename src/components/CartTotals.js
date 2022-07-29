import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 29 - CartTotals
 * Component - Features: 
 * 
 *      --> Building 'CartTotals' Component
 * 
 *      --> Destructuring 'total_amount' and 'shipping_fee' 
 *          from 'useCartContext()'
 * 
 * Notes: the goal of this component is to render:
 * 
 *    subtotal --> total_amount
 * 
 *    shipping fee --> shipping_fee
 * 
 *    order total --> total_amount + shipping_fee
 * 
 * all of these amounts formmated.
*/

const CartTotals = () => {

  const { total_amount, shipping_fee } = useCartContext();

  return(
    <Wrapper> 
      <div>
        <article>
          <h5>subtotal:
             <span>{formatPrice(total_amount)}
             </span>
          </h5>
          <p>shipping fee: 
            <span>{formatPrice(shipping_fee)}
            </span>
          </p>
          <hr />
          <h4>order total: 
            <span>
              {formatPrice(total_amount + shipping_fee)
              }</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
