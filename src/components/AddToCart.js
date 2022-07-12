import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

/**comfy-sloth-ecommerce app version 10 - AddToCart 
 * file - Features: 
 * 
 *      --> Destructuring 'product' and getting 
 *          his props. 
 *      
 *      --> Building state to handle the colors 
 *          value.
 * 
 *      --> Mapping the 'colors' array an setting 
 *          up in a 'button' 
 * 
 *      --> Setting an active class to indicate that 
 *          a color have been selected by an user.                   
 * 
 * Notes: This version is the basic setup of the 
 * 'AddToCart', part of the full functionallity is
 * going to be provided by the 'cart_context' -this
 * way the cart features can be use where i need it
 * on my application-
 * 
 * The 'active' class has the 'opacity' different to the
 * 'color-btn' so can be easily identified as selected
 * also the '<FaCheck' icon
 * 
 * in the next version i'll incorporate the increase and 
 * decrease feature for the 'product' added to the cart
*/

const AddToCart = ({ product }) => {

  /**here i destructure the 'product' props */
  const { id, stock, colors } = product;

  /**here i build the color state to handle the 'colors' 
   * value */
  const [ mainColor , setMainColor ] = useState(colors[0]);

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
