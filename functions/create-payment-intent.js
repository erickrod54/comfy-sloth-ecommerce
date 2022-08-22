/**comfy-sloth-ecommerce app version 36 - functions > 
 * create-payment-intent file - Features: 
 * 
 *      --> Building the function to create the
 *          Payment intent. -with the cart and rest
 *          of the props comming from the API-
 *          -Complete-   
 * 
 *      --> Building 'calculateOrderAmount'                   
 * 
 * Notes: to test the payment intent function:
 *   
 * //domain/.netlity/.netlify/functions/create-payment-intent
*/

require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET)

exports.handler = async function (event, context) {
    
    /**here i'm checking that i received in 'event.body'
     * the props from the API here in netlify function server
     * side*/
    //console.log(event)

    if (event.body) {
        /**here i destructure and parse it */
        const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

        /**here i calculate the total order - i'll use it in next
         * verions*/
        const calculateOrderAmount = () => {
            return shipping_fee + total_amount
        }
        /**here i test that i get the cart */
        console.log(cart)
    
        return{
            statusCode:200,
            /**and stringify it  */
            body:JSON.stringify(cart)
        }
    }
    return{
        statusCode:200,
        body: 'Create Payment Intent',        
    }
    
}