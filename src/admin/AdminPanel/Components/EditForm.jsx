import React from 'react'

const EditForm = ({ Name, type, ResponsiveClasses, FormClasses, LabelClasses }) => {

  return (
    <div className={` ${ResponsiveClasses} `}>
    <input
      asp-for="Name"
      type={type}
      disabled={disabled}
      className={` ${FormClasses} `}
      id="PersonFirstName"

    />
    <label for="Name" className={` ${LabelClasses} `}>
     {Name}
    </label>
  </div>
  )
}

export default EditForm