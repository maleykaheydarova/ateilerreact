import React from 'react'
import EntityTable from '../Components/EntityTable'
import Helper from '../../../Helpers/helper'

const Post = () => {
  const properties = ["Name"]
  return (
    <EntityTable apiUrl={Helper} entityName={"Size"} propertyNames={properties} />
  )
}

export default Post