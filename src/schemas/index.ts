import { object, string } from "yup";


export const vehicleRegistrationSchema = object().shape({
    tagNumber:string().required('Required'),
    vehicleNumber:string().required('Required'),
    vehicleType:
    string()
    .oneOf(["CAR","DUMPER","LMV","OIL_TANKER","TRUCK","MPV","4W","2W","CYCLE"])
    .required('Required'),
    organizations:
    string()
    .oneOf([])
})


