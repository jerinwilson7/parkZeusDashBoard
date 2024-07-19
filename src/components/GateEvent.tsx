import { Button } from "./Button";
// import camImg from "../assets/Images/cam.jpg";
import zoomImg from "../assets/Images/Zoom.svg";
import warnImg from "../assets/Images/warning.svg";
import { UnprocessedType, VehicleDetailsType } from "../types";
import { Form } from "./Form";
import { useVehicleDetails } from "../contexts/VehicleContext";
import { useState } from "react";

type GateEventType = {
  unprocessedData: UnprocessedType[];
};

export const GateEvent = ({ unprocessedData }: GateEventType) => {
  const { setVehicleDetails } = useVehicleDetails();
  const [showForm, setShowForm] = useState(false)

  const [{ vehicleDetails }] = unprocessedData;
  

  const handleUpdateDetails = (details: VehicleDetailsType) => {
    setVehicleDetails(details);
    setShowForm(true)
  };

  const handeleCloseForm = ()=>{
    setShowForm(false)
  }

  return (
    <div className="flex flex-col p-4">
     {showForm && <Form handleClose={handeleCloseForm} />}

      <div className="flex gap-4">
        <div className="w-1/2">
          <div className="flex flex-col w-full">
            <div className="h-80 rounded-t-md w-full">
              {vehicleDetails.entryImageUrl ? (
                <img
                  src={vehicleDetails.entryImageUrl}
                  className="h-full w-full object-center object-cover "
                />
              ) : (
                <div className="flex items-center justify-center rounded-md h-full w-full bg-ash text-gray-600">
                  No Image
                </div>
              )}
            </div>

            <div className="flex justify-between items-center bg-light-green-blue rounded-b-md p-2">
              <p>Entry Camera</p>
              <img src={zoomImg} alt="" />
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <h3 className="text-lg">Vehicle Details</h3>
          <p className="text-gray-400 my-4 text-sm">
            Vehicle is not registered, click on "New Registration" button and
            kindly fill the form.
          </p>
          <Button
            className="bg-btn-blue flex py-2 px-8 text-white rounded-md"
            onActive={() => handleUpdateDetails(vehicleDetails)}
          >
            New Registration
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-end mt-4">
        <div className="space-y-2">
          <h3>Boom Barrier</h3>
          <div className="flex gap-2">
            <Button className="bg-btn-blue py-2 px-8 text-white rounded-md text-sm">
              Open
            </Button>
            <Button className="bg-transparent py-2 px-8 text-btn-blue text-sm rounded-md border border-btn-blue">
              Close
            </Button>
          </div>
        </div>

        <div className="">
          <button className="bg-btn-blue py-2 px-8 text-white rounded-md text-sm flex items-center gap-2">
            <img src={warnImg} alt="" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

