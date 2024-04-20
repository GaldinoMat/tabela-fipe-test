import { Dispatch } from "react";

export interface State {
  brand: string;
  model: string;
  year: string;
}

export interface Context {
  state: State;
  dispatch: Dispatch<Actions>;
}

export enum ActionType {
  AddBrand,
  AddModel,
  AddYear,
  AddResponse,
}

export interface AddBrand {
  type: ActionType.AddBrand;
  payload: string;
}

export interface AddModel {
  type: ActionType.AddModel;
  payload: string;
}

export interface AddYear {
  type: ActionType.AddYear;
  payload: string;
}

export interface AddResponse {
  type: ActionType.AddResponse;
  payload: Response;
}

export type Actions = AddBrand | AddModel | AddYear | AddResponse;
