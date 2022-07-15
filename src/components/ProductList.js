import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'


/**comfy-sloth-ecommerce app version 12 - ProductList
 * Component - Features: 
 * 
 *      --> Destructuring 'filtered_products' from                                   
 *          'useFilterContext()' 
 * 
 *       --> Importing and Placing 'GridView' 
 *            Component.
 * 
 * Notes: As a starter will be set as 'GridView', but the final
 * will have different views.
 * 
 * 'Gridview' Component will render the 'filtered_products' as a
 * list
*/

const ProductList = () => {

  /**here i destructure 'filtered_products' with a 'products' 
   * allias */
  const { filtered_products: products } = useFilterContext()

  /**here i test that actually i can get the provided values */
  //console.log('this is provided by FilterProvider ==>', products)

  return(
      <GridView products={products}>
        product list
      </GridView>
    )
}

export default ProductList
