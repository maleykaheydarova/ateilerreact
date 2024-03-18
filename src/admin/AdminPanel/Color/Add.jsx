import React from 'react';
import AddEntity from '../Components/AddEntity';

const Add = () => {
  const propertyNames = ["Name"]
  return (
    <AddEntity entityName={"Color"} propertyNames={propertyNames} />
  );
};

export default Add;
