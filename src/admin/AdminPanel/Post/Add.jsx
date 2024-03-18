import React from 'react'
import AddEntity from '../Components/AddEntity'

const Add = () => {

  const propertyNames = ["Name", "Author", "Description", "Image"]

  return (
    <AddEntity entityName={"Post"} propertyNames={propertyNames} />
  )
}

export default Add