import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

/**comfy-sloth-ecommerce app version 2 - 'About' Page
 * - Features: 
 * 
 *      --> Building 'About' Component.
 * 
 *      --> Importing and Placing 'PageHero' Component.
 * 
 *      --> Styling the component.
 * 
 * Notes: Wrapper, title and underline gives styles to the
 * 'AboutPage' Component.
*/

const AboutPage = () => {
  return(
    <main>
      <PageHero title='about'/>
        <Wrapper className='page section section-center'>
           <img src={aboutImg} alt='nice desk'/> 
           <article>
            <div className='title'>
              <h2>our story</h2>
              <div className='underline'></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Nibh mauris 
              cursus mattis molestie a iaculis at erat. Dolor 
              magna eget est lorem ipsum dolor. Pretium vulputate
             sapien nec sagittis aliquam malesuada bibendum arcu. 
             Vitae aliquet nec ullamcorper sit. Varius duis at 
             consectetur lorem donec. Commodo quis imperdiet massa 
             tincidunt nunc. Id porta nibh venenatis cras 
             sed felis. Tempus imperdiet nulla malesuada 
             pellentesque elit eget gravida. Leo urna molestie 
             at elementum eu facilisis sed odio morbi. 
             Purus viverra accumsan in nisl nisi scelerisque. 
             Praesent tristique magna sit amet.
              Feugiat pretium nibh ipsum consequat nisl vel.</p>
           </article>
        </Wrapper>
    </main>
    )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
