import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "./Button";
import { CustomInput } from "./custom/CustomInput";
import { vehicleRegistrationSchema } from "../schemas";
import { CustomSelectBox } from "./custom/CustomSelectBox";
import { usePark } from "../contexts/MainContext";

type RegistrationFormType = {
  handleClose: () => void;
};

type FormValuesType = {
  tagNumber: string;
  vehicleNumber: string;
  vehicleType: string;
  organizations:string
};

export const RegistrationForm = ({ handleClose }: RegistrationFormType) => {
  const { vehicleType ,organizations} = usePark();

  const handleSubmit = async (
    values: FormValuesType,
    actions: FormikHelpers<FormValuesType>
  ) => {
    console.log("Values submitted are:", values);
    console.log("Actions object:", actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <div>
      <div className="bg-black opacity-60 fixed inset-0 z-20"></div>
      <div className="fixed z-30 bg-white rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[72%] w-1/3">
        <div className="flex flex-col p-6 rounded-md bg-white">
          <div className="flex justify-end">
            <button onClick={handleClose}>X</button>
          </div>
          <div className="w-full">
            <h2 className="text-xl px-1 mt-2">Vehicle Registration</h2>
            <Formik
              initialValues={{
                tagNumber: "",
                vehicleNumber: "",
                vehicleType: "",
                organizations:"",
              }}
              validationSchema={vehicleRegistrationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <CustomInput
                    value={props.values.tagNumber}
                    name="tagNumber"
                    labelTag="Enter Tag Number"
                    placeholder="Tag Number"
                  />
                  <CustomInput
                    value={props.values.vehicleNumber}
                    name="vehicleNumber"
                    labelTag="Enter Vehicle Number"
                    placeholder="Vehicle Number"
                  />
                  <CustomSelectBox
                    labelTag="Vehicle Type"
                    name="vehicleType"
                    placeholder="Select Vehicle Type"
                  >
                    {vehicleType?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </CustomSelectBox>

                  <CustomSelectBox
                    labelTag="Organizations"
                    name="organizations"
                    placeholder="Select Organizations"
                  >
                    {organizations?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </CustomSelectBox>
                  <div className="mt-3">
                    <Button
                      className="bg-btn-blue px-8 py-2 rounded-md text-sm text-white"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
