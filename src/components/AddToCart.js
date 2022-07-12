import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

/**comfy-sloth-ecommerce app version 11 - AddToCart 
 * file - Features: 
 * 
 *      --> Placing the 'Amount' Component.
 * 
 *      --> Building a state to handle the amount
 *          to 'increase' and 'decrease' a product.
 *    
 *      --> Building the 'increase' and 'decrease' 
 *         feature
 * 
 *      --> Drilling the 'increase' and 'decrease' 
 *         features as props to the 'Amount' 
 *         Component.                     
 * 
 * Notes: Implementing the 'increase' and 'decrease' 
 * feature for the 'product' added to the cart
*/

const AddToCart = ({ product }) => {

  /**here i destructure the 'product' props */
  const { id, stock, colors } = product;

  /**here i build the color state to handle the 'colors' 
   * value */
  const [ mainColor , setMainColor ] = useState(colors[0]);

  const [ amount, setAmount ] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock ) {
        tempAmount = stock;
      }
      return tempAmount;
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1 ) {
        tempAmount = 1;
      }
      return tempAmount;
    })
  }

  return(
      <Wrapper>
        <div className='colors'>
          {/**here i map the colors */}
          <span> colors: </span>
          <div>{
            colors.map((color, index) => {
              return <button 
                style={{ background: color}}
                key={index} 
                className={`${mainColor === color ? 'color-btn active' : 'color-btn' }`}
                onClick={() => setMainColor(color)}
                >{ mainColor === color ? <FaCheck /> : null }</button>
            })
            }</div>
        </div>
        <div className='btn-container'>
          <AmountButtons 
              amount={amount} 
              increase={increase} 
              decrease={decrease}/>
          <Link to='/cart' className='btn'>
            add to cart
          </Link>
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
