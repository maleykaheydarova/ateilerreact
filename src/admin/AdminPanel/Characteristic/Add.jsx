import React from 'react'
import Helper from '../../../Helpers/helper'
import AddEntity from '../Components/AddEntity'

const Add = () => {
    const propertyNames = ["Name"]
  return (
    <AddEntity apiUrl={Helper} entityName={"Characteristic"} propertyNames={propertyNames}/>
  )
}

export default Add