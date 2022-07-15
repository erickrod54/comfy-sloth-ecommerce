import React from 'react'
import styled from 'styled-components'
import Product from './Product'

/**comfy-sloth-ecommerce app version 12 - GridView
 * file - Features: 
 * 
 *      --> Destructuring the 'products' that were
 *          drilled from 'ProductsList'.
 * 
 *      --> Mapping the 'products' on the 'Product'
 *          Component.                                  
 * 
 * Notes: this is the component that will render a 
 * 'GridView'
*/

const GridView = ({ products }) => {
  return(
      <Wrapper>
        <div className='products-container'>
          {products.map((product) => {
            return <Product key={product.id} {...product}/>
          })}
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
