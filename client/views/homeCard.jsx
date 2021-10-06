import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const HomeCard = ({ home }) => {

  let tags = home.tags.map(tag => {
    return <span className='tag'>{tag}</span>
  })



  return (
    <div className='card'>
      <Link to={`/modal/${home.homePlanId}`}>
      <div>
        <img src={home.image} />
      </div>
      <div className='cardItem detailOne'>
        {home.name}
      </div>
      <div className='cardItem detailTwo'>
        {home.numBeds} beds - {home.numBaths} baths - {home.sqft} sqft
      </div>
      <div className='cardItem'>
        {tags}
      </div>
      <div className='cardItem description'>
        {home.description}
      </div>
      </Link>
    </div>
  )
}

export default HomeCard