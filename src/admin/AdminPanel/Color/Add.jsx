import React from 'react';
import AddEntity from '../Components/AddEntity';
import Helper from '../../../Helpers/helper'

const Add = () => {
  const properties = ["Name"]
  return (
    <AddEntity apiUrl={Helper} entityName={"Color"} propertyNames={properties} />
  );
};

export default Add;
