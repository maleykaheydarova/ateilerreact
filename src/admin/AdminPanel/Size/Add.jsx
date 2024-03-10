import React from 'react'
import AddEntity from '../Components/AddEntity'

const Add = () => {
  const properties = ["Name"]
  return (
    <AddEntity entityName={"Size"} propertyNames={properties}/>
  )
}

export default Add