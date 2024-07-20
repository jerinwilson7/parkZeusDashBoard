import React from "react";
import { usePark } from "../contexts/MainContext";
import { Button } from "./Button";

type NotificationPropsType = {
    notificationref?:React.ForwardedRef<HTMLDivElement>;
}

export const NotificationBox = ({notificationref}:NotificationPropsType) => {

    const {alerts} = usePark()

    const date = new Date(alerts[0].createdAt).toISOString().split('T')[0]

  return (
    <div className="absolute top-9 shadow-md rounded-md overflow-auto right-3 p-6 bg-white h-[400px] w-96" ref={notificationref} >
      <div className="flex items-center justify-between">
        <h1 className="font-medium">Notifications</h1>
        <Button className="text-gray-500">{"View all >"}</Button>
      </div>
      <div className="py-2">
        <h4 className="font-thin">{date}</h4>
        {
            alerts.map((alert,index)=>(

                <p className="p-1">{index+1}.{alert.description}</p>
            ))
        }
        
      </div>
    </div>
  );
};
