import React from 'react'
import EditEntity from '../Components/EditEntity';

const Edit = () => {
  const properties = ["Name"]
  return (
        <EditEntity apiUrl="https://localhost:44397/api" entityName="Color" propertyNames={properties}/>
    )
}

export default Edit


