/**comfy-sloth-ecommerce app version 19 - helpers 
 * file - Features: 
 * 
 *      --> Building 'getUniqueValues' to get
 *          unique values from whatever parameters
 *          i pass througt it.             
 * 
 * Notes: the ES6 flat() makes posible the access to 
 * the 'colors' array inside the 'all_products' array
 * 
 * this helper this way can be apply to another 
 * Components and features - also makes possible
 * to add easyly any category, company and color
 * without any need of large modifications, just
 * only setting up in the data-
*/
export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    }).format(number / 100)
}

/**'data' for 'Filters'  will be 'all_products'
 * and 'type' will be 'categories' */
export const getUniqueValues = (data,type) => {
    /** 'item[type]' access dynamicly to the 'type' 
     * througt the single 'data' > 'item' */
    let unique = data.map((item) => item[type])

    /**to access i conditionally get the type > color */
    if (type === 'colors') {
        /**then i reasign the 'unique' to 'unique.flat()'*/
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}
