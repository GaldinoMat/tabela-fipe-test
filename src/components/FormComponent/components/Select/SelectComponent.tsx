import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { SelectProps } from "./types/types";
import InputLabel from "@mui/material/InputLabel";
import { ResponseContext } from "@/hooks/useResponse/useResponse";
import { ActionType as ResponseDispatchActionType } from "@/hooks/useResponse/types/types";
import { StateContext } from "@/hooks/useSelectedState/useSelectedState";
import { ActionType as StateDispatchActionType } from "@/hooks/useSelectedState/types/types";

export default function SelectComponent({
  isHidden,
  testId,
  placeholder,
  children,
}: SelectProps) {
  const { dispatch: responseDispatch } = useContext(ResponseContext);
  const { state, dispatch: StateDispatch } = useContext(StateContext);
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  const handleChange = async (event: SelectChangeEvent) => {
    if (/\d/.test(event.target.value)) {
      setSelectedVariant(event.target.value);
      if (placeholder === "Marca") {
        const { modelos } = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${event.target.value}/modelos`
        ).then((resp) => resp.json());

        responseDispatch({
          type: ResponseDispatchActionType.AddModels,
          payload: modelos,
        });
        responseDispatch({
          type: ResponseDispatchActionType.AddYears,
          payload: [],
        });
      } else if (placeholder === "Modelo") {
        const data = await fetch(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${state.brand}/modelos/${event.target.value}/anos`
        ).then((resp) => resp.json());
        responseDispatch({
          type: ResponseDispatchActionType.AddYears,
          payload: data,
        });
      }
    }
  };

  useEffect(() => {
    if (placeholder === "Marca") {
      StateDispatch({
        type: StateDispatchActionType.AddBrand,
        payload: selectedVariant,
      });
      StateDispatch({
        type: StateDispatchActionType.AddModel,
        payload: "",
      });
      StateDispatch({
        type: StateDispatchActionType.AddYear,
        payload: "",
      });
    } else if (placeholder === "Modelo") {
      StateDispatch({
        type: StateDispatchActionType.AddModel,
        payload: selectedVariant,
      });
      StateDispatch({
        type: StateDispatchActionType.AddYear,
        payload: "",
      });
    } else if (placeholder === "Ano") {
      StateDispatch({
        type: StateDispatchActionType.AddYear,
        payload: selectedVariant,
      });
    }
  }, [StateDispatch, placeholder, selectedVariant]);

  return (
    <FormControl fullWidth>
      {!isHidden && (
        <InputLabel id={`placeholder-${placeholder}`}>{placeholder}</InputLabel>
      )}
      <Select
        value={selectedVariant}
        data-testid={testId}
        labelId={`placeholder-${placeholder}`}
        label={placeholder}
        onChange={handleChange}
        sx={
          isHidden
            ? { borderColor: "#E9E6EC", display: "none" }
            : { borderColor: "#E9E6EC", width: "100%" }
        }
      >
        {children.length !== 0 ? (
          children?.map((item) => (
            <MenuItem value={item.codigo} key={`${item.codigo}-${item.nome}`}>
              {item.nome}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="?" key="none">
            Nenhum resultado disponível
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
