import React from 'react'

const SelectInput = ({children, className, onHandleChange,name,selectedValue, required}) => {
  return (
    <select value={selectedValue} name={name} onChange={onHandleChange} className={` border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm dark:text-gray-100 ${className}`} required={required}>
{children}
        </select>
  )
}

export default SelectInput
