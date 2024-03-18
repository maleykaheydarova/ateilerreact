import React from 'react'
import EntityTable from '../Components/EntityTable'
const Post = () => {
  const properties = ["Name"]
  return (
    <EntityTable entityName={"Post"} propertyNames={properties} />
  )
}

export default Post