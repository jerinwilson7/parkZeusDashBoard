import React from "react"

type InputPropsType = {
    labelTag:string
    placeholder:string
    value:string
    inputName:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    handleBlur:(e:React.FocusEvent<HTMLInputElement>)=>void
}

export const Input = ({labelTag,placeholder,inputName,value,handleChange,handleBlur}:InputPropsType) => {
  return (
    <div className="py-3 w-4/5">
      <label className="text-sm px-1">{labelTag}</label>
      <div className="w-full pr-2 py-4 px-2.5 rounded-xl border-solid ">
        <input type="text" value={value} name={inputName} className="w-full px-3 py-3.5 rounded-xl bg-white text-gray-500 outline-none shadow-md"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        
        
       
      </div>
    </div>
  )
}
