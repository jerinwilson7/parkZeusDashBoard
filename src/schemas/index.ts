import { object, string } from "yup";

export const vehicleRegistrationSchema = object().shape({
    tagNumber:string().required('Required'),
    vehicleNumber:string().required('Required')
})