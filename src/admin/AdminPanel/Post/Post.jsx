import React from 'react'
import EntityTable from '../Components/EntityTable'

const Post = () => {
  const propertyNames = ["Name", "Author", "Description", "Image", "CreatedDate"]
  return (
    <EntityTable entityName={"Post"} propertyNames={propertyNames} />
  )
}

export default Post