import { usePark } from '../contexts/MainContext'
import { useVehicleDetails } from '../contexts/VehicleContext'
import { Button } from './Button'
import { Input } from './Input'
import { SelectBox } from './SelectBox'

type FormType = {
    handleClose: ()=>void
}

export const Form = ({handleClose}:FormType) => {
    const { vehicleDetails } = useVehicleDetails()
    const {vehicleType,organizations} = usePark()

    

    if (vehicleDetails === undefined) {
        return null; 
    }

    return (
        <div>
            <div className="bg-black opacity-60 fixed inset-0 z-20"></div>

            <div className='fixed z-30 bg-white rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[72%] w-1/3 '>
                <div className='flex flex-col p-6 rounded-md bg-white'>
                    <div className='flex justify-end'>
                        <button onClick={handleClose}>X</button>
                    </div>

                    <div className='w-full'>
                        <h2 className='text-xl px-1 mt-2'>Vehicle Registration</h2>

                        <form className='mt-4'>
                            <div>
                                <SelectBox labelTag={'Tag Number'} options={vehicleDetails.allTagIDs}/>

                                <Input labelTag='Enter Vehicle Number' placeholder='Vehicle Number *'/>

                                <SelectBox labelTag={'Vehicle Type'} options={vehicleType}
                                initialOption='Select Vehicle Type'
                                />

                                <SelectBox labelTag={'Organizations'} options={organizations}
                                initialOption='Select Organizations'
                                />

                                <div className='mt-3'>
                                    <Button className='bg-btn-blue px-8 py-2 rounded-md text-sm text-white'>
                                        Submit
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


// asd