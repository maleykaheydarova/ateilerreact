import React from 'react'
import EditEntity from '../Components/EditEntity'

const Edit = () => {
  const propertyNames = ["Name"]
  return (
    <EditEntity entityName={"Tag"} propertyNames={propertyNames}/>
  )
}

export default Edit