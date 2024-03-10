import React from 'react'
import EntityTable from '../Components/EntityTable'

const Characteristic = () => {
  const propertyNames = ["Name"]
  return (
    <EntityTable entityName={"Characteristic"} propertyNames={propertyNames}/>
  )
}

export default Characteristic