import React from "react";
import EditEntity from '../Components/EditEntity'

const Edit = () => {
  const propertyNames = ["Name", "Price", "Rating", "IsTrending", "IsFeatured", "Image", "Description"]

  return (
    <EditEntity entityName={"Product"} propertyNames={propertyNames}/>
  );
};

export default Edit;
