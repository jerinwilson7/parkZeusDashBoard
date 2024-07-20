export type ParkProviderType = {
  children: React.ReactNode;
};

export type GatesType = {
  id: number;
  name: string;
  cameras: CameraType[];
};

type CameraType = {
  id: number;
  name: string;
  laneId: null | string;
};

type GetUserType = {
  type: "user/loaded";
  payload: string;
};
type GetAlertsType = {
  type: "alerts/loaded";
  payload: AlertsType[];
};

type GetGatesType = {
  type: "gates/loaded";
  payload: GatesType[];
};

type Loading = {
  type: "loading";
};
type LoadingCompleted = {
  type: "loading/completed";
};

type GetCameras = {
  type: "cameras/loaded";
  payload: CameraType[];
};

type GetUnprocessedData = {
  type: "unprocessed/loaded";
  payload: UnprocessedType[];
};

export type UnprocessedType = {
  id: number;
  status: string;
  parkingDetails: {
    entryTime: string;
    entryGate: {
      id: number;
      name: string;
    };
  };
  vehicleDetails: VehicleDetailsType;
};

export type VehicleDetailsType = {
  allTagIDs: string[];
  entryImageUrl: string;
};

type VehicleTypes = {
  type: "vehicles/loaded";
  payload: string[];
};

type OrganizationsTypes = {
  type: "organizations/loaded";
  payload: string[];
};

type AlertsType = {
  id:number;
  description:string;
  createdAt:string
}

export type InitialState = {
  userName: string;
  alerts: AlertsType[];
  gates: GatesType[];
  isLoading: boolean;
  cameras: CameraType[];
  unprocessedData: UnprocessedType[];
  vehicleType: string[];
  organizations: string[];
};

export type ActionType =
  | GetUserType
  | GetAlertsType
  | GetGatesType
  | Loading
  | GetCameras
  | LoadingCompleted
  | GetUnprocessedData
  | VehicleTypes
  | OrganizationsTypes;
