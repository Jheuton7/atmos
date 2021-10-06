import React from 'react';
import { useSelector } from 'react-redux'

import HomeCard from './homeCard.jsx'

const Homes = () => {
  const { homePlans } = useSelector(state => state)

  if (homePlans) {
    let homeCards = homePlans.map(home => {
      return <div key={home.homePlanId}><HomeCard home={home} /></div>
    })


    return (
      <div>
        <div className='container'>
          {homeCards}
        </div>
      </div>
    )

  } else {
    return (
      null
    )
  }
}

export default Homes;