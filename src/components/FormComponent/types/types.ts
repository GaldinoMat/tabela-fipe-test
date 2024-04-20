import { GenericArr } from "@/types/types";
import { FormEvent } from "react";

export interface ModeloFipe {
  AnoModelo: number;
  Modelo: string;
  Valor: string;
  Marca: string;
}

export interface SelectProps {
  testId: string;
  placeholder: string;
  isHidden?: boolean;
  children: GenericArr[];
}

export interface FormTypes {
  handleSubmit: (e: FormEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
