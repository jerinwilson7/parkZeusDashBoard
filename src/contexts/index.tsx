import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ActionType, InitialState, ParkProviderType } from '../types';
import { BASE_URL, token } from '../config';
import { authHeader } from '../utils';



const ParkZeusContext = createContext<InitialState>({} as InitialState);

const reducer = (state: InitialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'loading':
        return{...state,isLoading:true}
    case 'user/loaded':
      return { ...state, userName: action.payload };

    case 'alerts/loaded':
      return { ...state, alerts: action.payload};

    case 'gates/loaded':
        return {...state, gates:action.payload}  
        
    case 'cameras/loaded':
      return {...state,cameras:action.payload,isLoading:false}    

    default:
      return state;
  }
};

const ParkProvider = ({ children }: ParkProviderType) => {
  const [{ userName, alerts , gates,isLoading,cameras}, dispatch] = useReducer(reducer,{} as InitialState );

  useEffect(() => {

    dispatch({type:'loading'})

    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/5`, {
          headers: authHeader(token),
        });

        dispatch({ type: 'user/loaded', payload: response.data.username });
        dispatch({type:'gates/loaded',payload:response.data.gates})
        dispatch({type:'cameras/loaded',payload:response.data.gates.cameras})
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    const fetchAlerts = async () => {
        dispatch({type:'loading'})
      try {
        const response = await axios.get(`${BASE_URL}/alerts`, {
          params: {
            scope: 'ac',
            resolved: true,
            'app-id': 'opr',
          },
          headers: authHeader(token),
        });

        dispatch({ type: 'alerts/loaded', payload: response.data });
      } catch (error) {
        console.log('Error fetching alerts:', error);
      }
    };

    fetchUser();
    fetchAlerts();
  }, []);

  return (
    <ParkZeusContext.Provider value={{ userName, alerts ,gates,isLoading,cameras }}>
      {children}
    </ParkZeusContext.Provider>
  );
};

const usePark = () => {
  const context = useContext(ParkZeusContext);
  if (!context) {
    throw new Error('Park context must be used within the ParkProvider');
  }
  return context;
};

export { ParkProvider, usePark };