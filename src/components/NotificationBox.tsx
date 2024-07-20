import { usePark } from "../contexts/MainContext";
import { Button } from "./Button";

export const NotificationBox = () => {

    const {alerts} = usePark()

  return (
    <div className="absolute top-9 shadow-md rounded-md overflow-auto right-3 p-6 bg-white h-[400px] w-96">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">Notifications</h1>
        <Button className="text-gray-500">{"View all >"}</Button>
      </div>
      <div className="py-2 no-scrollbar">
        <h4 className="font-thin">2024-07-16</h4>
        {
            alerts.map((alert,index)=>(

                <p className="p-1">{index+1}.{alert.description}</p>
            ))
        }
        
      </div>
    </div>
  );
};
