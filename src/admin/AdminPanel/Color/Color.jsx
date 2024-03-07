import React, { useEffect, useState } from 'react';
import EntityTable from '../Components/EntityTable';
import Helper from '../../../Helpers/helper'

const Color = () => {
  const properties = ["Name"]
  return (
    <EntityTable apiUrl={Helper} entityName={'Color'} propertyNames={properties}/>
  )
};

export default Color;