import React from 'react'
import AddEntity from '../Components/AddEntity'

const Add = () => {
    const propertyNames = ["Name"]
  return (
    <AddEntity entityName={"Characteristic"} propertyNames={propertyNames}/>
  )
}

export default Add