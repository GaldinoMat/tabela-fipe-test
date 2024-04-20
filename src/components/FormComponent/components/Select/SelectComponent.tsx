import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface SelectProps {
  testId: string;
  placeholder: string;
  value: string;
  isHidden?: boolean;
}

export default function SelectComponent({
  isHidden,
  testId,
  placeholder,
  value,
}: SelectProps) {
  return (
    <>
      <Select
        value={value}
        data-testid={testId}
        // onChange={handleChange}
        sx={
          isHidden
            ? { borderColor: "#E9E6EC", display: "none" }
            : { borderColor: "#E9E6EC", width: "100%" }
        }
      >
        {/* <MenuItem value={10}>Ten</MenuItem> */}
      </Select>
    </>
  );
}
