import React from 'react';
import { useSelector } from 'react-redux'
import LotCard from './lotCard.jsx'

const Lots = () => {
  const { lots } = useSelector(state => state)

  if (lots) {
    let lotCards = lots.map(lot => {
      return <div key={lot.lotId}><LotCard lot={lot} /></div>
    })
    return (
      <div>
        <div className='container'>
          {lotCards}
        </div>
      </div>
    )

  } else {
    return (null
    )
  }
}

export default Lots