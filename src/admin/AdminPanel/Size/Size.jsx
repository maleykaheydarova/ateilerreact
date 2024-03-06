import React from 'react'
import EntityTable from '../Components/EntityTable'

const Post = () => {
  const properties = ["Name"]
  return (
    <EntityTable apiUrl={"https://localhost:44397/api"} entityName={"Size"} propertyNames={properties} />
  )
}

export default Post