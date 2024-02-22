import React from 'react'

const AddForm = ({ Name, type, ResponsiveClasses, FormClasses, LabelClasses }) => {
  return (
    <div className={` ${ResponsiveClasses} `}>
    <input
      asp-for="Name"
      type={type}
      className={` ${FormClasses} `}
      id="PersonFirstName"

    />
    <label for="Name" className={` ${LabelClasses} `}>
     {Name}
    </label>
  </div>
  )
}

export default AddForm