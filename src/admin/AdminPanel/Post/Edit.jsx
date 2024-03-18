import React from 'react'
import EditEntity from '../Components/EditEntity'

const Edit = () => {
  const propertyNames = ["Name", "Author", "Description", "Image"]
  return (
    <EditEntity entityName={"Post"} propertyNames={propertyNames}/>
  )
}

export default Edit