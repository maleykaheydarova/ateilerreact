import React from 'react';
import EntityTable from '../Components/EntityTable';

const Color = () => {
  const propertyNames = ["Name"]
  return (
    <EntityTable entityName={'Color'} propertyNames={propertyNames}/>
  )
};

export default Color;