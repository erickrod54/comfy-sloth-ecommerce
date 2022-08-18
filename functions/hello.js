/**comfy-sloth-ecommerce app version 33 - functions > 
 * hello js file - Features: 
 * 
 *      --> Building a test function to test netlify
 *          response.                      
 * 
 * Notes: this is a test with the statusCode 200 and
 * the message hello world, to test it out:
 * 
 *    --> // domain/.netlify/functions/hello
 *
 *  pending to solve issue --> i dont get
 *          netlify response  
*/

exports.handler = async function (event, context) {
    return{
        statusCode:200,
        body:'Hello World'
    }
}