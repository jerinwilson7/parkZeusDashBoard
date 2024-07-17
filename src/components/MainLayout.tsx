import { CameraFeed } from "./CameraFeed";
import { ParkingInformation } from "./ParkingInformation";
import { RecentTransaction } from "./RecentTransaction";

export const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-16">
      <div className="w-full py-8">
        <div className="flex gap-8 justify-between">
          <RecentTransaction />

          <div className="flex flex-col gap-8 w-2/3">
            <div className="flex gap-8">

              <ParkingInformation/>
              

              <CameraFeed/>

            </div>

            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
