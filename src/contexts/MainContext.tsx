import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { ActionType, InitialState, ParkProviderType } from "../types";
import { BASE_URL, token } from "../config";
import { authHeader } from "../utils";

const ParkZeusContext = createContext<InitialState>({} as InitialState); //create context

const initialStateData: InitialState = {
  userName: "",
  alerts: [],
  gates: [],
  cameras: [],
  isLoading: false,
  unprocessedData: [],
  vehicleType: [],
  organizations: [],
};

const reducer = (state: InitialState, action: ActionType): InitialState => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "user/loaded":
      return { ...state, userName: action.payload };

    case "alerts/loaded":
      return { ...state, alerts: action.payload };

    case "gates/loaded":
      return { ...state, gates: action.payload };

    case "cameras/loaded":
      return { ...state, cameras: action.payload };

    case "unprocessed/loaded":
      return { ...state, unprocessedData: action.payload };

    case "vehicles/loaded":
      return { ...state, vehicleType: action.payload };

    case "organizations/loaded":
      return { ...state, organizations: action.payload };

    case "loading/completed":
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

const ParkProvider = ({ children }: ParkProviderType) => {
  const [
    {
      userName,
      alerts,
      gates,
      isLoading,
      cameras,
      unprocessedData,
      vehicleType,
      organizations,
    },
    dispatch,
  ] = useReducer(reducer, initialStateData);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch({ type: "loading" });
        const response = await axios.get(`${BASE_URL}/users/5`, {
          headers: authHeader(token),
        });

        dispatch({ type: "user/loaded", payload: response.data.username });
        dispatch({ type: "gates/loaded", payload: response.data.gates });
        dispatch({
          type: "cameras/loaded",
          payload: response.data.gates.cameras,
        });
        dispatch({ type: "loading/completed" });
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    const fetchAlerts = async () => {
      try {
        dispatch({ type: "loading" });
        const response = await axios.get(`${BASE_URL}/alerts`, {
          params: {
            scope: "ac",
            resolved: true,
            "app-id": "opr",
          },
          headers: authHeader(token),
        });

        dispatch({ type: "alerts/loaded", payload: response.data });
        dispatch({ type: "loading/completed" });
      } catch (error) {
        console.log("Error fetching alerts:", error);
      }
    };

    const fetchUnprocessedData = async () => {
      try {
        dispatch({ type: "loading" });
        const response = await axios.get(
          `${BASE_URL}/transactions/unprocessed`,
          {
            headers: authHeader(token),
          }
        );

        dispatch({ type: "unprocessed/loaded", payload: response.data });
        dispatch({ type: "loading/completed" });
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVehicleTypes = async () => {
      try {
        dispatch({ type: "loading" });
        const response = await axios.get(
          `${BASE_URL}/configs/rfid-ac/vehicle-types`,
          {
            headers: authHeader(token),
          }
        );

        dispatch({ type: "vehicles/loaded", payload: response.data });
        dispatch({ type: "loading/completed" });
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOrganizations = async () => {
      try {
        dispatch({ type: "loading" });
        const response = await axios.get(`${BASE_URL}/organizations`, {
          headers: authHeader(token),
        });

        dispatch({ type: "organizations/loaded", payload: response.data });
        dispatch({ type: "loading/completed" });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    fetchAlerts();
    fetchUnprocessedData();
    fetchVehicleTypes();
    fetchOrganizations();
  }, []);

  return (
    <ParkZeusContext.Provider
      value={{
        userName,
        alerts,
        gates,
        isLoading,
        cameras,
        unprocessedData,
        vehicleType,
        organizations,
      }}
    >
      {children}
    </ParkZeusContext.Provider>
  );
};

const usePark = () => {
  const context = useContext(ParkZeusContext);
  if (!context) {
    throw new Error("Park context must be used within the ParkProvider");
  }
  return context;
};

export { ParkProvider, usePark };
