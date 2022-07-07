import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

/**comfy-sloth-ecommerce app version 4 - FeaturedProducts 
 * Component - Features: 
 * 
 *      --> Building 'FeaturedProducts' Component.
 * 
 *      --> Destructuring 'products_loading', 
 *         'products_error':error, 'featured_products'.
 *          from 'useProductsContext()'
 *       
 *      --> Conditional rendering 'loading' and
 *          'error' previously destructured.
 * 
 *      --> Mapping and slicing 'featured' array
 *          to render 3 products.
 *    
 *      --> Styling the Component.            
 * 
 * Notes: the slice method applied before mapping 
 * will render a 'slice' -part of the array- that 
 * i inidicate the limit 
*/

const FeaturedProducts = () => {

  const { products_loading:loading, 
          products_error:error, 
          featured_products: featured } = useProductsContext()
          
          if (loading ) {
            return <Loading />
          }

          if (error) {
            return <Error />
          }

  return(
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'/>
      </div>
      <div className='section-center featured'>
        {featured.slice(0,3).map((product) => {
          return <Product key={product.id} {...product}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
