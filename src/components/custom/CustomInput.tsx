
import { useField } from "formik"

type InputPropsType = {
    labelTag:string
    placeholder:string
    value:string
    name:string
    // handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}



export const CustomInput = ({labelTag,...props}:InputPropsType) => {
    const [field] = useField(props)
  return (
    <div className="py-3 w-4/5">
    <label className="text-sm px-1">{labelTag}</label>
    <div className="w-full pr-2 py-4 px-2.5 rounded-xl border-solid ">
    
      <input type="text" {...field} {...props} className="w-full px-3 py-3.5 rounded-xl bg-white text-gray-500 outline-none shadow-md"
      
      />
      
      
     
    </div>
  </div>
  )
}
