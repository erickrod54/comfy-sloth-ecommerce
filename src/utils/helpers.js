/**comfy-sloth-ecommerce app version 5 - Product 
 * Component - Features: 
 * 
 *      --> Building 'formatPrice' to handle 
 *         format of the price -this is not
 *         a covertion, its a visual matter-            
 * 
 * Notes: the method is 'Intl.NumberFormat' with
 * the syntax as follows, and the style:'currency',
 * currency:'USD' props, i have to divide it by '100' 
 * this method autoticlly add the '$' sign -this case
 * because is US dollar- but depending on the currency
 * add the respective sign
*/
export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format(number / 100)
}

export const getUniqueValues = () => {}
