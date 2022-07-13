import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

/**comfy-sloth-ecommerce app version 11 - Amount
 * Component - Features: 
 * 
 *      --> Destructuring 'increase' and 'decrease'
 *          functionalities also the 'amount' value.
 * 
 *      --> Building the 'AmountButtons' Component.                                 
 * 
 * Notes: The 'increase' and 'decrease' functionalies for
 * the first one is going to have the top as the 'stock'
 * of the product, and the decrease the bottom will be 
 * '1' because a product with '0' - 'stock' cannot be 
 * render.
*/

const AmountButtons = ({ amount, increase, decrease }) => {
  return(
    <Wrapper className='amount-btns'>
      <button 
        type='button' 
        className='amount-btn' 
        onClick={decrease}>
          <FaMinus />
      </button>
        <h2 className='amount'>{amount}</h2>
      <button 
        type='button' 
        className='amount-btn' 
        onClick={increase}>
          <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
