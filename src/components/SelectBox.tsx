
type SelectBoxPropsType = {
    labelTag:string
    initialOption?:string
    options:string[]
}

export const SelectBox = ({labelTag,options,initialOption}:SelectBoxPropsType) => {


  return (
    <div className="py-3 w-4/5">
      <label className="text-sm px-1">{labelTag}</label>
      <div className="w-full pr-2 my-2  rounded-xl border-solid ">
        <select className="w-full px-2.5 py-4 rounded-xl bg-white text-gray-500 outline-none shadow-md"
        >
            {initialOption && (
                <option value=''>{initialOption}</option>
            )}
            {
                options?.map((option,index)=>(

                    <option key={index} value={option}>{option}</option>
                ))
            }
         
        </select>
      </div>
    </div>
  );
};
