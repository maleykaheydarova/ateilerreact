import React from 'react'
import Helper from '../../../Helpers/helper'
import EditEntity from '../Components/EditEntity'

const Edit = () => {
    const propertyNames = ["Name"]
    return (
        <EditEntity apiUrl={Helper} entityName={"Characteristic"} propertyNames={propertyNames} />
    )
}

export default Edit