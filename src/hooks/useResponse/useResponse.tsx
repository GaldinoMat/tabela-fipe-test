import { createContext, useReducer } from "react";
import { ActionType, Actions, Context, Provider, State } from "./types/types";

const initialState: State = {
  brands: [],
  models: [],
  years: [],
  errorMessage: "",
};

export const ResponseContext = createContext<Context>({
  state: initialState,
  dispatch: () => undefined,
});

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionType.AddBrands:
      return {
        ...state,
        brands: action.payload,
      };
    case ActionType.AddModels:
      return {
        ...state,
        models: action.payload,
      };
    case ActionType.AddYears:
      return {
        ...state,
        years: action.payload,
      };
    case ActionType.AddError:
      return {
        brands: [],
        models: [],
        years: [],
        errorMessage: "Um erro ocorreu. Tente novamente mais tarde.",
      };

    case ActionType.ClearState:
      return {
        ...state,
        models: [],
        years: [],
        errorMessage: "",
      };
    default:
      throw new Error("No valid reducer actions");
  }
};

export const ResponseProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ResponseContext.Provider value={{ state, dispatch }}>
      {children}
    </ResponseContext.Provider>
  );
};
