import React from 'react'
import EntityTable from '../Components/EntityTable'

const Post = () => {
  const propertyNames = ["Name"]
  return (
    <EntityTable entityName={"Size"} propertyNames={propertyNames} />
  )
}

export default Post