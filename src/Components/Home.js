import React, { useContext, useEffect } from 'react'

import { MainContext } from '../Context/MainContext'

const Home = () => {

  const {generalSearch, propertySearch, propertyList, singleProperty} = useContext(MainContext)

  useEffect(() => {
    generalSearch()
  }, [])

  const renderProperties = () => {
    return (
      <div className='propertyList' style={{height: '100vh', width: '434px'}}>
        {
          propertyList.results.map((prop) => {
            return(
              <div onClick={() => {propertySearch(prop.zpid)}} className='property'>
                <div>
                  <img alt='home source' style={{width: '420px', height: '260px'}} src={prop.imgSrc}/>
                </div>
                <div className='details'>
                  <div className='price'>
                    $ {prop.price} | {prop.homeStatus}
                  </div>
                  <div className='summary'>
                    {prop.bedrooms} Beds | {prop.bathrooms} Baths | {prop.livingArea} Sqft.
                  </div>
                  <div className='address'>
                    {prop.streetAddress} {prop.city}, {prop.state} {prop.zipcode}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  const renderNoProperties = () => {
    return(
      <div></div>
    )
  }

  const renderNothing = () => {
    return(
      <div>Loading Properties</div>
    )
  }

  const renderSingleProperty = () => {
    return(
      <div>
        <div>
          <img alt="Main" style={{width: '100%', height: '240px'}} src={singleProperty.desktopWebHdpImageLink} />
        </div>
        <div>
          <div>
            ${singleProperty.price} | <span>{singleProperty.homeStatus}</span>
          </div>
          <div>
            {singleProperty.address.streetAddress}. {singleProperty.address.city}, {singleProperty.address.state} {singleProperty.address.zipcode}
          </div>
          <div>
            {singleProperty.bedrooms} Beds | {singleProperty.bathrooms} Bath | {singleProperty.livingArea} {singleProperty.livingAreaUnitsShort}
          </div>
        </div>
        <div></div>
        <div>
          <div>
            Year Built: {singleProperty.yearBuilt}
          </div>
          <div>
            Time On Zillow: {singleProperty.resoFacts.daysOnZillow}
          </div>
          <div>
            Property Type: {singleProperty.propertyTypeDimension}
          </div>
          <div>
            Move In Ready: {singleProperty.moveInReady ? 'Yes' : 'No'}
          </div>
          <div>
            Garage Space: {singleProperty.resoFacts.garageSpaces ? singleProperty.resoFacts.garageSpaces : 'None'}
          </div>
          <div>
            Furnished: {singleProperty.resoFacts.furnished ? 'Yes' : 'No'}
          </div>
          <div>
            Stories: {singleProperty.resoFacts.stories}
          </div>
          <div>
            Hoa Fee's: {singleProperty.resoFacts.hoaFee}
          </div>
          <div>
            Parking Spaces: {singleProperty.resoFacts.parking}
          </div>
        </div>
        <div>
          <div>
            Year Built: {singleProperty.description}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{height: '100vh', width: '434px'}}>
        {
          propertyList.results === undefined ? renderNoProperties() : renderProperties()
        }
        {
          singleProperty.address === undefined ? renderNothing() : renderSingleProperty()
        }
      </div>
    </div>
  )
}

export default Home