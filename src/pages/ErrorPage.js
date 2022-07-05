import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 2 - Error Page
 * - Features: 
 * 
 *      --> Bulding the 'Error' page
 * 
 * Notes: The 'Wrapper 'and 'btn' gives styles to
 * the error page.
*/

const ErrorPage = () => {
  return(
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page cannot be found</h3>  
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  
     )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
