import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { GenericArr } from "@/pages/types/types";

interface SelectProps {
  testId: string;
  placeholder: string;
  value: string;
  isHidden?: boolean;
  children?: GenericArr[];
}

export default function SelectComponent({
  isHidden,
  testId,
  placeholder,
  children,
  value,
}: SelectProps) {
  return (
    <>
      <Select
        value={value}
        data-testid={testId}
        placeholder={placeholder}
        // onChange={handleChange}
        sx={
          isHidden
            ? { borderColor: "#E9E6EC", display: "none" }
            : { borderColor: "#E9E6EC", width: "100%" }
        }
      >
        {/* {children?.map((child) => (
          <MenuItem id={child.código}>{child.nome}</MenuItem>
        ))} */}
      </Select>
    </>
  );
}
