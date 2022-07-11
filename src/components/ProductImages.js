import React, { useState } from 'react'
import styled from 'styled-components'

/**comfy-sloth-ecommerce app version 9 - ProductImages
 * file - Features: 
 * 
 *      --> Building a state to set the images
 *          when the user select them -onClick-.
 *               
 *      --> Destructuring images previously drilled
 *          from 'SingleProductPage' Component.
 * 
 *      --> Building the image gallery using a 
 *          'main.url' image and mapping the 
 *          the rest of 'main.url' images.
 * 
 * 
 * Notes: The 'images' and the 'url' are 'undefined'
 * values at the beggining that's why i set initial
 * values where a destructured and drilled.
 * 
 * The classes use to give style to the gallery are
 * 'main', 'active'
*/

/**here i set the initial values */
const ProductImages = ({ images = [{url:''}] }) => {

  /**here i build the satte for the images -in order
   * to make this state work i have to set initial values
   * for it- */
  const [ main, setMain ] = useState(images[0])

  console.log('images received at ProductImages ==> ', images)
  console.log('this is the alt name for the images, the filename prop ==>', main)
  return(
    <Wrapper>
      {/**here is the full galery */}

      {/**here is the main 'image' -the active class is to apply a 
       * style to the image that has been selected by the user-*/}
      <img src={main.url} alt='main imagen' className='main'/>

      {/**here i map the rest of 'images' */}
      <div className='gallery'>
        {images.map((image, index) => {
          return <img 
                  key={index} 
                  src={image.url} 
                  alt={image.filename} 
                  onClick={ () => setMain(images[index])}
                  className={`${image.url === main.url  ? 
                    'active' : null}`}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
