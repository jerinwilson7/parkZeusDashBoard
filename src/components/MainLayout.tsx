import { CameraFeed } from "./CameraFeed";
import { ParkingInformation } from "./ParkingInformation";
import { RecentTransaction } from "./RecentTransaction";

import { Gates } from "./Gates";
import { VehicleDetailsProvider } from "../contexts/VehicleContext";
import { Button } from "./Button";
import { IoIosRefresh } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

export const MainLayout = () => {
  return (
    <div className="max-w-[1400px]  mx-auto w-full px-16">
      <div className="w-full py-8">
        <div className="flex gap-8 justify-between mb-8">
          <RecentTransaction />

          <div className="flex flex-col gap-8 w-2/3">
            <div className="flex gap-8">
              <ParkingInformation />

              <CameraFeed />
            </div>

            <VehicleDetailsProvider>

           <Gates/>
            </VehicleDetailsProvider>

          </div>
        </div>

        <div>
          <div className="flex items-center -space-x-4 w-full">
            <div className="flex space-x-4 w-full">
              <Button>Vehicle Registration</Button>
              <Button>Driver Registration</Button>
              <Button>Payment Collection</Button>
              <Button>Parking Overview</Button>
            </div>
          </div>
        </div>

        <div className="bg-btn-blue fixed bottom-10 right-10 rounded-full ">
          <Button className="p-4 rounded-full ">
            <IoIosRefresh color="white" size={20}/>
          </Button>
          <Button className="p-4 rounded-full">
            <FaTrash color='white' size={20}/>
          </Button>
        </div>

      </div>
    </div>
  );
};
