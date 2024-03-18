import React from 'react'
import EditEntity from '../Components/EditEntity'

const Edit = () => {
  const propertyNames = ["Name"]
  return (
    <EditEntity entityName={"Size"} propertyNames={propertyNames}/>
  )
}

export default Edit