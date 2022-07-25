import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

/**comfy-sloth-ecommerce app version 22 - Filter
 * Component - Features: 
 * 
 *      --> Rendering the 'colors'.
 * 
 *      --> Mapping 'colors' array after 
 *          getting 'getUniqueValues'.
 * 
 *      --> Triggering 'updateFilters' on clicking
 *          each color.                                     
 * 
 * Notes: By the name 'color' i am targeting the select
 * on 'Filter' Component where i'm rendering the each 'company'
 * by mapping it, then to get the value and by triggering 
 * 'updateFilters' i am aign in it dynamicly to the 'color'
 * prop on the filters object - check chrome > Components  > 
 * filters - and as the user interacts will change the value
 * 
 * The button as an attribute will have ES6 dataset method 
 * 'data-color' and will have the value of each color.
*/

const Filters = () => {
  const { 
    filters:{
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  //console.log(colors)
  

  return(
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/**search input */}
          <input 
            type='text' 
            name='text' 
            placeholder='search' 
            className='search-input'
            value={text}
            onChange={updateFilters}
            />
          {/**end search input */}
          {/**categories input */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return <button 
                        key={index} 
                        onClick={updateFilters}
                        type='button'
                        name='category'
                        className={`${ category === c.toLowerCase() ? 
                          'active' : null }`}
                        >{c}</button>
              })}
            </div>
          </div>
          {/**end categories input */}
          {/**companies */}
          <div className='form-control'>
            <h5>companies</h5>
            <select 
              name='company' 
              value={company} 
              onChange={updateFilters} 
              className='company'>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>{c}</option>
                )
              })}
            </select>
          </div>
          {/**end companies */}
          {/**colors */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {
                colors.map((c, index) => {
                  /**a conditional rendering for
                   * the 'all' button */
                  if (c === 'all') {
                    return(
                      <button 
                      key={index}
                      name='color' 
                      onClick={updateFilters} 
                      data-color='all'
                      className={`${ color === 'all' ? 'all-btn active' : 'all-btn'}`}
                      >
                        all
                      </button>
                    )
                  }
                  /**then i render the colors in a 
                   * button, the 'data- *'  i what
                   * i use to get the data on 
                   * 'filter_context > updateFilters'
                   * by using ES6 dataset method.
                   * */
                  return (
                    <button 
                    key={index} 
                    name='color'
                    style={{background:c}}
                    className={`${color === c ? 
                    'color-btn active' : 'color-btn'}`}
                    data-color={c}
                    onClick={updateFilters}
                    >
                      {/**as value i conditionally render
                       * the icon 'FaCheck' if the color 
                       * exists */}
                      {color === c ? <FaCheck /> : null} 
                    </button>)              
                  
                })
              }
            </div>
          </div>
          {/**end of colors */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
