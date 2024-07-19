import { CameraFeed } from "./CameraFeed";
import { ParkingInformation } from "./ParkingInformation";
import { RecentTransaction } from "./RecentTransaction";

import { Gates } from "./Gates";
import { VehicleDetailsProvider } from "../contexts/VehicleContext";
import { Button } from "./Button";
import { IoIosRefresh } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { ButtonGroup } from "./ButtonGroup";
import { RegistrationForm } from "./RegistrationForm";
import { useState } from "react";


export const MainLayout = () => {

  const [showForm, setShowForm] = useState(false)

  const handeleCloseForm = ()=>{
    setShowForm(false)
  }
  const handeleOpenForm = ()=>{
    setShowForm(true)
  }

  

  return (
    <div className="max-w-[1400px] mx-auto w-full px-16">
     {showForm && <RegistrationForm handleClose={handeleCloseForm}/>}
      <div className="w-full py-8">
        <div className="flex gap-8 justify-between mb-8">
          <RecentTransaction />

          <div className="flex flex-col gap-8 w-2/3">
            <div className="flex gap-8">
              <ParkingInformation />
              <CameraFeed />
            </div>

            <VehicleDetailsProvider>
              <Gates />
            </VehicleDetailsProvider>
          </div>
        </div>

        <ButtonGroup handleOpenForm={handeleOpenForm}/>

        <div className="bg-btn-blue fixed bottom-10 right-10 rounded-full ">
          <Button className="p-4 rounded-full ">
            <IoIosRefresh color="white" size={20} />
          </Button>
          <Button className="p-4 rounded-full">
            <FaTrash color="white" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
