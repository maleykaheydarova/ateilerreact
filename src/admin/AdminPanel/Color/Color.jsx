import React from 'react';
import EntityTable from '../Components/EntityTable';

const Color = () => {
  const properties = ["Name"]
  return (
    <EntityTable entityName={'Color'} propertyNames={properties}/>
  )
};

export default Color;