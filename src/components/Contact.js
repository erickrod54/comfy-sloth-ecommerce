import React from 'react'
import styled from 'styled-components'

/**comfy-sloth-ecommerce app version 2 - 'Contact'
 * Component - Features: 
 * 
 *      --> Building 'Contact' Component.
 * 
 *      --> Building basic form to suscirbe newsletter.
 * 
 * Notes: This a component that integrates with
 * 'HomePage' page in order to suscribe the newsletter,
 * 
 * This Component is styled using 'section-center', 'content',
 * 'contact-form', submit-btn and 'form-input' 
*/

const Contact = () => {
  return(
    <Wrapper>
      <section className='section-center'>
        <h3>Join our newsletter</h3>
        <div className='content'>
          <p>
          nunc mattis enim ut tellus elementum sagittis
          vitae et leo duis ut diam quam nulla porttitor massa 
          id neque aliquam vestibulum morbi blandit cursus risus
           at ultrices mi tempus imperdiet nulla malesuada 
           pellentesque elit eget gravida cum sociis natoque 
           penatibus
          </p>
          <form 
            className='contact-form'
            action='https://formspree.io/f/xknyljko'
            method='POST'>
            <input 
              type='email' 
              className='form-input' 
              placeholder='enter email'
              name='_replyto' />
          <button type='submit' className='submit-btn'>
            suscribe
          </button>
          </form>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
