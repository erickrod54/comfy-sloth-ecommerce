import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**comfy-sloth-ecommerce app version 39 - SingleProductPage 
 * file - Features: 
 * 
 *      --> Importing and Placing 'useNavigate'.
 * 
 *      --> Replacing 'history.push' for 
 *          'navigate'.                
 * 
 * Notes: navigate is use to redirecting in react
 * router v6
*/

const SingleProductPage = () => {

  const { id } = useParams()

  /**here i change 'history' for 'useNavigate' */
  const navigate = useNavigate()

  /**here i destructure 'props' and 'fucntionality'
   * giving them nice friendly alliases*/
  const { single_product_loading:loading,
         single_product_error: error,
         single_product: product,
         fetchSingleProduct } = useProductsContext()

 //console.log('this is the data result of the fetch ==>', product)  

/**here i build the url */         
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  },[id])

  /**here i build the timer */
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        /**here i change 'history.push' for 'navigate' */
        navigate('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  /**here i destructure the 'product' props */
  const {name,
         price,
         description,
         stock,
         stars,
         reviews,
         id:sku,
         company,
         images } = product


  return(
    <Wrapper>
      <PageHero title={name} product/>
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          {/**here i drilled the props*/}
          <ProductImages images={images}/>
          <section className='content'>
            <h2>{name}</h2>
            {/**here i drilled the props*/}
            <Stars stars={stars} reviews={reviews}/>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>

            {/**some of these comnditionals are checking 
             * the stock in order to render values and
             * a Component*/}
            <p className='info'>
              <span>Avaible : </span>
              {stock > 0 ? 'In Stock' : 'Out od Stock'}
            </p>

            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>

            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product}/> }

          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
