import TextField from "@mui/material/TextField";

interface SelectProps {
  testId: string;
  placeholder: string;
  value: {};
  isHidden?: boolean;
}

export default function Select({
  isHidden,
  testId,
  placeholder,
  value,
}: SelectProps) {
  return (
    <TextField
      id="select-car"
      data-testid={testId}
      select
      value={value}
      placeholder={placeholder}
      sx={
        isHidden
          ? { borderColor: "#E9E6EC", display: "none" }
          : { borderColor: "#E9E6EC" }
      }
    />
  );
}
