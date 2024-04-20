import { createContext, useReducer } from "react";
import { Provider } from "../useResponse/types/types";
import { ActionType, Actions, Context, State } from "./types/types";

const initialState: State = {
  brand: "",
  model: "",
  year: "",
};

export const StateContext = createContext<Context>({
  state: initialState,
  dispatch: () => undefined,
});

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionType.AddBrand:
      return {
        ...state,
        brand: action.payload,
      };
    case ActionType.AddModel:
      return {
        ...state,
        model: action.payload,
      };
    case ActionType.AddYear:
      return {
        ...state,
        year: action.payload,
      };
    default:
      throw new Error("No valid reducer actions");
  }
};

export const StateProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
