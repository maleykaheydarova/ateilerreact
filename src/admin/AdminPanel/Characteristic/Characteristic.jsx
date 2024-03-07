import React from 'react'
import Helper from '../../../Helpers/helper'
import EntityTable from '../Components/EntityTable'

const Characteristic = () => {
  const propertyNames = ["Name"]
  return (
    <EntityTable apiUrl={Helper} entityName={"Characteristic"} propertyNames={propertyNames}/>
  )
}

export default Characteristic