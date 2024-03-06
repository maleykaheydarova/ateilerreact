import React, { useEffect, useState } from 'react';
import EntityTable from '../Components/EntityTable';

const Color = () => {
  const properties = ["Name"]
  return (
    <EntityTable apiUrl={'https://localhost:44397/api'} entityName={'Color'} propertyNames={properties}/>
  )
};

export default Color;