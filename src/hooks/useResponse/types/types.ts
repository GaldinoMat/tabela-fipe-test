import { GenericArr } from "@/types/types";
import { Dispatch, ReactNode } from "react";

export interface State {
  brands: GenericArr[];
  models: GenericArr[];
  years: GenericArr[];
}

export interface Context {
  state: State;
  dispatch: Dispatch<Actions>;
}

export enum ActionType {
  AddBrands,
  AddModels,
  AddYears,
}

export interface AddBrands {
  type: ActionType.AddBrands;
  payload: GenericArr[];
}

export interface AddModels {
  type: ActionType.AddModels;
  payload: GenericArr[];
}

export interface AddYears {
  type: ActionType.AddYears;
  payload: GenericArr[];
}

export interface Provider {
  children: ReactNode;
}

export type Actions = AddBrands | AddModels | AddYears;
