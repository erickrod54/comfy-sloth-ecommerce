/**comfy-sloth-ecommerce app version 37 - functions > 
 * create-payment-intent file - Features:    
 * 
 *      --> Building 'calculateOrderAmount'
 *          -to substite to cart-       
 * 
 *      --> Getting the .env secret key            
 * 
 * Notes: to test the payment intent function:
 *   
 * //domain/.netlity/.netlify/functions/create-payment-intent
 * 
 * 
*/

/**here i require the package */
require('dotenv').config()

/**here i access by .env the key */
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
    
        try {
            /**this is the case where stripe needs the amount
             * in cents to process the payment*/
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: 'usd'
            })
            return{
                statusCode:200,
                body: JSON.stringify({clientSecret: paymentIntent.client_secret})
            }
        } catch (error) {
            return {
                statusCode:500,
                body: JSON.stringify({ msg: error.message }),
            }    
        }
    }
    return{
        statusCode:200,
        body: 'Create Payment Intent',        
    }
    
}