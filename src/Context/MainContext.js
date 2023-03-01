import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

import { options, property } from '../required'

export const MainContext = createContext(null)

export const MainContextProvider = ({children}) => {

  const [lookup, setLookup] = useState('Los Angeles, CA')
  const [zpid, setZpid] = useState()

  const [propertyList, setPropertyList] = useState([])
  const [singleProperty, setSingleProperty] = useState({})

  const [latitude, setLatitude] = useState(10.99835602)
  const [longitude, setLongitude] = useState(77.01502627)
  const [zoom, setZoom] = useState(11)

  const generalSearch = () => {
    options.params.location = lookup
    console.log(options)
    axios.request(options)
      .then((response) => {
        // console.log(response.data)
        setSingleProperty({})
        setPropertyList(response.data)
        setLongitude(response.data.results[0].longitude)
        setLatitude(response.data.results[0].latitude)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const propertySearch = (zpid) => {
    property.params.zpid = zpid
    console.log(property)
    axios.request(property)
      .then((response) => {
        console.log('response:', response.data)
        setPropertyList([])
        setSingleProperty(response.data)
        setLongitude(response.data.longitude)
        setLatitude(response.data.latitude)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    console.log(propertyList)
  }, [propertyList])

  useEffect(() => {
    console.log(longitude)
  }, [longitude])

  useEffect(() => {
    console.log(latitude)
  }, [latitude])

  return (
    <MainContext.Provider value={{propertyList,
                                  lookup,
                                  singleProperty,
                                  longitude,
                                  latitude,
                                  zoom,
                                  setLookup, 
                                  generalSearch,
                                  propertySearch,
                                  setLongitude,
                                  setLatitude,
                                  setZoom}}>
      {children}
    </MainContext.Provider>
  )
}