import { createContext, useContext, useState } from "react";
import { VehicleDetailsType } from "../types";

type VehicleDetailsProviderProps = {
  children: React.ReactNode;
};

type VehicleContextType = {
  vehicleDetails: VehicleDetailsType  | undefined; 
  setVehicleDetails: (details: VehicleDetailsType  | undefined) => void; 
};

const VehicleContext = createContext<VehicleContextType>({
  vehicleDetails: undefined, 
  setVehicleDetails: () => {},
});

const VehicleDetailsProvider = ({ children }: VehicleDetailsProviderProps) => {
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetailsType  | undefined>(undefined); 

  return (
    <VehicleContext.Provider value={{ vehicleDetails, setVehicleDetails }}>
      {children}
    </VehicleContext.Provider>
  );
};

const useVehicleDetails = () => {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error("Vehicle context must be used within the VehicleDetailsProvider");
  }

  return context;
};

export { VehicleDetailsProvider, useVehicleDetails };
