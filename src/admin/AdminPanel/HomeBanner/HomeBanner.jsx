import React from 'react'
import EntityTable from '../Components/EntityTable';

const HomeBanner = () => {
  const propertyNames = ["Image"]

  return (
    <EntityTable entityName={"HomeBanner"} propertyNames={propertyNames} />
  )
}

export default HomeBanner