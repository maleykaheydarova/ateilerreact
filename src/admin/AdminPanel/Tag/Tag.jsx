import React from 'react'
import Helper from '../../../Helpers/helper'
import EntityTable from '../Components/EntityTable'

const Post = () => {
  const propertyNames = ["Name"]
  return (
    <EntityTable apiUrl={Helper} entityName={"Tag"} propertyNames={propertyNames}/>
  )
}

export default Post