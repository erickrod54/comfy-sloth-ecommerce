import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
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

/**comfy-sloth-ecommerce app version 6 - SingleProductPage 
 * file - Features: 
 * 
 *      --> Destructuring props and functionality from
 *          the 'useProductsContext()'.
 * 
 *      --> Building the 'url' for the single product
 *          using 'fetchSingleProduct' functionality
 * 
 *      --> Handling the 'loading' and the 'error'               
 * 
 * Notes: On this version i handle first the the url
 * building, error and loading components also set a 
 * timer for the error component, in order to redirect
 * to the home page just in case if the 'error' occurs
*/

const SingleProductPage = () => {

  /**here i acces the 'id' */
  console.log(useParams())

  /**here i destructure the 'id' to use it,
   * i pull it from the 'useParam'*/
  const { id } = useParams()

  /**here i destructure the whole 'history'
   * object in order to access to the 'push' 
   * and build the timer */
  const history = useHistory()
  console.log('this is the history ==>', history)

  /**here i destructure 'props' and 'fucntionality'
   * giving them nice friendly alliases*/
  const { single_product_loading:loading,
         single_product_error: error,
         single_product: product,
         fetchSingleProduct } = useProductsContext()

/**here i build the url, the url needs an unique 'id'
 * in order to display it correctly, so i set it as 
 * dependency array. */         
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  },[id])

  /**here i build the timer to redirects automaticly
   * in 3s if an 'error' occurs, i use the history
   * that i previous destructure to push the '/'
   * route, i set as depency the 'error' will switch
   * from 'false' to 'true' and triggers the redirect*/
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return(
    <Wrapper>
      single product
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
