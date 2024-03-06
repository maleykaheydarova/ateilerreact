import React from 'react'
import AddEntity from '../Components/AddEntity'

const Add = () => {
  const properties = ["Name"]
  return (
    <AddEntity apiUrl={"https://localhost:44397/api"} entityName={"Size"} propertyNames={properties}/>
  )
}

export default Add