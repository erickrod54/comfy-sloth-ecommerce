import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

/**comfy-sloth-ecommerce app version 11 - ProductsPage
 * file - Features: 
 * 
 *      --> Importing and Placing 'PageHero', 'Filters',
 *          'Sort', and 'ProductList' Components to
 *           build 'ProductsPage'                         
 * 
 * Notes: for this version will focus on building a 'ProductsList'
 * and 'ProductsPage' starter 
*/


const ProductsPage = () => {
  return(
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>

  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
