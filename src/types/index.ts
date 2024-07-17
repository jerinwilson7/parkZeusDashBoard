export type ParkProviderType = {
    children:React.ReactNode
}


export type GatesType = {
    id: number;
    name: string;
    cameras: {
      id: number;
      name: string;
      laneId: null | string;
    };
  };
  

type GetUserType = {
    type:'user/loaded',
    payload:string
}
type GetAlertsType = {
    type:'alerts/loaded',
    payload:string[]
}

type GetGatesType={
    type:'gates/loaded',
    payload:GatesType[]
}

type Loading={
    type:'loading',
}


export type InitialState = {
    userName:string
    alerts:string[]
    gates:GatesType[]
    isLoading:boolean
}


export type ActionType = GetUserType | GetAlertsType | GetGatesType |Loading