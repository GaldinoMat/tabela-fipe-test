import { GenericArr } from "@/pages/types/types";

export interface SelectProps {
  testId: string;
  placeholder: string;
  isHidden?: boolean;
  children: GenericArr[];
}
