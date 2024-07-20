import { useState } from "react";
import { Button } from "./Button";
import { GateEvent } from "./GateEvent";
import { NoGateEvent } from "./NoGateEvent";
import { usePark } from "../contexts/MainContext";

export const Gates = () => {
  const { gates , unprocessedData} = usePark();
  const [activeGate, setActiveGate] = useState(gates[0]?.id)

  if (!gates || gates.length === 0) return;

  const activeGateUnprocessedData =  unprocessedData.filter(data=>data.parkingDetails.entryGate.id === activeGate)
 

  return (
    <div className="bg-white min-h-6">
      <div className="flex flex-col rounded-md w-full">
        <div className="flex bg-red-200">
          {gates.map((gate) => {
            const count = unprocessedData.filter(data => data.parkingDetails.entryGate.id === gate.id).length;
            
            return (

            <Button
            key={gate.id}
             className={`p-2 w-full " ${activeGate === gate.id  ? "bg-btn-blue text-white" :" bg-inActive-bg text-gray-600"} `}
             onActive={() => setActiveGate(gate.id)}
             >
              {gate.name}
              { count > 0 &&
              <span className="bg-red-500 rounded-full px-2 py-1 ml-2 text-white">
                {count}
              </span>
              }
            </Button>
            )
          })}
        </div>

        <div>
        {
            activeGateUnprocessedData.length > 0 ? 
            <GateEvent unprocessedData={activeGateUnprocessedData}/> :
          <NoGateEvent />
        }

        </div>
      </div>
    </div>
  );
};
