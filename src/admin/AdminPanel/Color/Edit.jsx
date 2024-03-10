import React from 'react'
import EditEntity from '../Components/EditEntity';

const Edit = () => {
  const properties = ["Name"]
  return (
        <EditEntity entityName="Color" propertyNames={properties}/>
    )
}

export default Edit


