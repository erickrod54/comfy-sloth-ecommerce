import React, { useState } from 'react'
import styled from 'styled-components'

/**comfy-sloth-ecommerce app version 32 - ProductImages
 * file - Features: 
 * 
 *      --> Fixing warning related to the 'ProductsImages'
 *          'alt'. 
 * 
 * 
 * Notes: By this version i'm fixing warnings
*/

/**here i set the initial values */
const ProductImages = ({ images = [{url:''}] }) => {

  /**here i build the satte for the images -in order
   * to make this state work i have to set initial values
   * for it- */
  const [ main, setMain ] = useState(images[0])

  //console.log('images received at ProductImages ==> ', images)
  //console.log('this is the alt name for the images, the filename prop ==>', main)
  return(
    <Wrapper>
      {/**here is the full galery */}

      {/**here i change it alt to 'main' */}
      <img src={main.url} alt='main' className='main'/>

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
