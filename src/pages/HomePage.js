import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'

/**comfy-sloth-ecommerce app version 2 - 'HomePage'
 * Component - Features: 
 * 
 *      --> Building basic 'Home' page.
 * 
 * Notes: A good practice in order to build a page 
 * effectively is to place the Components that are
 * going to be part of the page, for this case 
 * i import' FeaturedProducts', 'Hero', 'Services',
 * 'Contact' and place it 
*/

const HomePage = () => {
  return(
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
