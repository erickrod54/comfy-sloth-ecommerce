import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

/**comfy-sloth-ecommerce app version 10 - Stars Component 
 * file - Features: 
 * 
 *      --> Refactoring the 'stars' -Prograaticlly approach-              
 * 
 * Notes: For the stars will be three cases all of them covered 
 * by the ternary operator:
 * 
 *   <BsStarFill /> ==> full star case
 *   <BsStarHalf /> ==>  half star
 *   <BsStar />}    ==> No stars
 * 
 * these will be based on the user qualification, and there will
 * be five stars and theirs values will be increase for the condition
 * depending on the star number
*/

const Stars = ({ stars, reviews }) => {

  //console.log('this is the stars value ==> ', stars ,
  //'and this is the reviews value ==>', reviews)

  /**i called 'tempStars' because i already use stars*/

  /**i createa new empty array with length of 5 -five stars-*/
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    
    /**the number is the rating value -1.5, 2.5, 3.5, 4.5- 
     * now this way programaticly*/
    const number = index + 0.5
    return(
      /**i fill the array with the star code, and i use the 
       * number and index to modidy it -index + 1, cause my 
       * first index is 0 - */
      <span key={index}>
          {stars >= index + 1 ? 
          <BsStarFill /> : stars >= number ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
    )
  })
  //console.log('the tempStars ==>', tempStars)

  return(
    <Wrapper>
      {/** here i build the stars will be 5 -five-*/}
      <div className='stars'>
        {tempStars}
      </div>
      {/**here i set the reviews */}
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
