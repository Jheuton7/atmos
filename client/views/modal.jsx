import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory, useParams } from 'react-router-dom';

import LotCard from './lotCard.jsx';

const Modal = () => {

  const history = useHistory()
  const { id } = useParams()
  const { homePlans, lots, combintations } = useSelector(state => state)


  if (homePlans) {
    let selectedHome = homePlans.filter(home => home.homePlanId == id)
    selectedHome = selectedHome[0]

    let tags = selectedHome.tags.map(tag => {
      return <span className='tag'>{tag}</span>
    })

    let compatibleLotIds = []

    let combos = combintations.filter(combo => {
      if (combo.homePlanId == id) {
        compatibleLotIds.push(combo.lotId)
      }
    })

    let compatibleLots = lots.filter(lot => compatibleLotIds.includes(lot.lotId))
    let lotCards = compatibleLots.map(lot => {
      return <div key={lot.lotId}><LotCard lot={lot} /></div>
    })

    return (
      <div className="modal-wrapper" onClick={() => history.goBack()}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className='modal'>
            <div>
              <img className='modalItem1' src={selectedHome.image} />
            </div>
            <div className='modalItem2'>
            <div className='detailOne'>
              {selectedHome.name}
            </div>
            <div className='detailTwo'>
              {selectedHome.numBeds} beds - {selectedHome.numBaths} baths - {selectedHome.sqft} sqft
            </div>
            <div>
              {tags}
            </div>
            <div className='description'>
              {selectedHome.description}
            </div>

            </div>

            <div className='modalItem3'>
              {lotCards}
            </div>

          </div>
        </div>
      </div>

    )

  } else {
    return (null)
  }

};

export default withRouter(Modal);