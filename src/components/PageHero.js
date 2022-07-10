import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 7 - 'PageHero'
 * Component - Features: 
 * 
 *      --> Refactoring 'PageHero' in order to
 *          render correctly the 'singleProduct'
 * 
 * Notes: By checking the 'product' prop -this is the 
 * single product-, i conditionally render a '/Producst'
 * links right in between the products and the title
 * 
 * As i set this prop here in order to work i have to 
 * drill it to the component in the 'SingleProduct'
 * component
*/

/**here i destructure the 'product' prop*/
const PageHero = ({ title, product }) => {

  /**i render conditionally a 'products' link */
  return(
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link> / 
          {product && <Link to='/products'>
          Products /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
