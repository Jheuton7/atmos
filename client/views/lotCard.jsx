import React from 'react'

const LotCard = ({lot}) => {



  return(
    <div className='card'>
      <div>
        <img src={lot.image} />
      </div>
      <div className='cardItem detailOne'>
        {lot.address}
      </div>
      <div className='cardItem detailTwo'>
        {lot.acres} acres - {Math.floor(lot.acres * 43560).toLocaleString("en-US")} sqft
      </div>
      <div className='cardItem description'>
        {lot.description}
      </div>
    </div>
  )
}

export default LotCard