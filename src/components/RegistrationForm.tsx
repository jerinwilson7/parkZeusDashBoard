import { FormikHelpers, useFormik } from "formik";
import { usePark } from "../contexts/MainContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { SelectBox } from "./SelectBox";
import { vehicleRegistrationSchema } from "../schemas";

type RegistrationFormType = {
    handleClose: ()=>void
}

type FormValuesType = {
  tagNumber:string;
  vehicleNumber:string
}

const onSubmit = async(values:FormValuesType,actions:FormikHelpers<FormValuesType>)=>{
  console.log("Values submitted are :",values)
  console.log("actions :",actions)

  await new Promise ((resolve)=>setTimeout(resolve,1000))
  actions.resetForm()
}


export const RegistrationForm = ({handleClose}:RegistrationFormType) => {

  const {handleBlur,handleChange,values,handleSubmit,errors,touched,isSubmitting} = useFormik({
    initialValues: {
      tagNumber:'',
      vehicleNumber:''
    },
    validationSchema:vehicleRegistrationSchema,
    onSubmit
  })

  console.log(values)
  console.log("Errors :",errors)
  console.log("Touched :",touched)

  const { vehicleType, organizations } = usePark();

  return (
    <div>
      <div className="bg-black opacity-60 fixed inset-0 z-20"></div>

      <div className="fixed z-30 bg-white rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[72%] w-1/3 ">
        <div className="flex flex-col p-6 rounded-md bg-white">
          <div className="flex justify-end">
            <button onClick={handleClose}>X</button>
          </div>

          <div className="w-full">
            <h2 className="text-xl px-1 mt-2">Vehicle Registration</h2>

            <form className="mt-2" onSubmit={handleSubmit}>
              <div>
                <Input 
                labelTag="Enter Tag Number"
                 placeholder=" Tag Number*"
                 inputName="tagNumber"
                  value={values.tagNumber}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                   />
                <Input
                  labelTag="Enter Vehicle Number"
                  placeholder=" Vehicle Number*"
                  inputName="vehicleNumber"
                  handleChange={handleChange}
                  value={values.vehicleNumber}
                  handleBlur={handleBlur}

                />
                <SelectBox
                  labelTag={"Vehicle Type"}
                  options={vehicleType}
                  initialOption="Select Vehicle Type"
                />

                <SelectBox
                  labelTag={"Organizations"}
                  options={organizations}
                  initialOption="Select Organizations"
                />

                <div className="mt-3">
                  <Button className="bg-btn-blue px-8 py-2 rounded-md text-sm text-white"
                   isSubmitting={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
