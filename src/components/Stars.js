import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

/**comfy-sloth-ecommerce app version 9 - Stars Component 
 * file - Features: 
 * 
 *      --> Building the 'stars' -Manual approach- 
 * 
 *      --> Building the 'reviews'.             
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

  console.log('this is the stars value ==> ', stars ,
  'and this is the reviews value ==>', reviews)

  return(
    <Wrapper>
      {/** here i build the stars will be 5 -five-*/}
      <div className='stars'>
        {/**star */}
        <span>
          {stars >= 1 ? 
          <BsStarFill /> : stars >= 0.5 ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
        {/**end of star */}
        {/**star */}
        <span>
          {stars >= 2 ? 
          <BsStarFill /> : stars >= 1.5 ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
        {/**end of star */}
        {/**star */}
        <span>
          {stars >= 3 ? 
          <BsStarFill /> : stars >= 2.5 ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
        {/**end of star */}
        {/**star */}
        <span>
          {stars >= 4 ? 
          <BsStarFill /> : stars >= 3.5 ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
        {/**end of star */}
        {/**star */}
        <span>
          {stars === 5 ? 
          <BsStarFill /> : stars >= 4.5 ? 
          <BsStarHalf /> 
          : 
          <BsStar />}
        </span>
        {/**end of star */}
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
