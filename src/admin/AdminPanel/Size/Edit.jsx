import React from 'react'
import EditEntity from '../Components/EditEntity'
import Helper from '../../../Helpers/helper'

const Edit = () => {
  const properties = ["Name"]
  return (
    <EditEntity apiUrl={Helper} entityName={"Size"} propertyNames={properties}/>
  )
}

export default Edit