import React from "react";
import EditEntity from "../Components/EditEntity";

const Edit = () => {
  const propertyNames = ["Image"]

  return (
    <EditEntity entityName={"HomeBanner"} propertyNames={propertyNames} />
  )
}

export default Edit