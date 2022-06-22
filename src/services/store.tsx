import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  Dispatch,
  ReactNode,
  Context,
} from "react";
import { IAction, IState } from "../utils/types";

const initialState: IState = {};

const GlobalContext = createContext<IState>(initialState);

const reducers = (state: IState, action: IAction) => {
  return {
    ...state,
    ...Object.assign(state, {}),
  };
};

interface IStoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: IStoreProviderProps) {
  const [state, dispatch] = useReducer(reducers, initialState);
  const contextValue = useMemo(
    (): [IState, Dispatch<IAction>] => [state, dispatch],
    [state, dispatch]
  );

  return (
    <GlobalContext.Provider value={{ ...contextValue[0], ...contextValue }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useStore(): [IState, Dispatch<IAction>] {
  return useContext(GlobalContext as Context<any>);
}
