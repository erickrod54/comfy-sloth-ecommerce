import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'


/**comfy-sloth-ecommerce app version 13 - ProductList
 * Component - Features: 
 * 
 *      --> Destructuring 'grid_view' from 
 *          'useFilterContext()'
 * 
 *      --> Setting up a conditional rendering
 *          to render the 'ListView' Component
 *          depending on 'grid_view' value.
 * 
 * Notes: There is an issue with the 'hot refresh'
 * - react behavior-, so before setting the full 
 * functionality, to test it out how the view changes, 
 * i have to switch manually the 'grid_view' from 
 * 'false' to 'true' and refresh the page.
*/

const ProductList = () => {

  /**here i destructure 'grid_view' */
  const { filtered_products: products, grid_view } = useFilterContext()

  /**the condition to render if the product does
   * not exist*/
  if (products.length < 1) {
    <h5 style={{ textTransform:'none'}}>
      Sorry, no products match your search...
    </h5>
  }
  /**If the grid view value is false, i render
   * the 'ListView' Component*/
  if (grid_view === false) {
    return <ListView products={products} />
  }
  /**If any of above, i'll render 'GridView' Component */
  return(
      <GridView products={products}>
        product list
      </GridView>
    )
}

export default ProductList
