import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "../Select/SelectComponent";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ResponseContext } from "@/hooks/useResponse/useResponse";
import { StateContext } from "@/hooks/useSelectedState/useSelectedState";

export default function Form() {
  const [isValid, setIsValid] = useState<boolean>(false);

  const { state: responseContext } = useContext(ResponseContext);
  const { state: stateContext, dispatch } = useContext(StateContext);

  const { brands, models, years } = responseContext;

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { brand, model, year } = stateContext;

    const data = await fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`
    ).then((resp) => resp.json());
  };

  useEffect(() => {
    if (Object.values(stateContext).some((value) => value.length === 0)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [stateContext]);

  return (
    <Container maxWidth="xs">
      <Box
        onSubmit={handleSubmit}
        component="form"
        data-testid="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: ".75rem",
          bgcolor: "white",
          padding: "2rem",
          borderRadius: ".375rem",
          boxShadow: "0px 1px 1px 1px rgba(233,230,236,1)",
        }}
      >
        <Select placeholder="Marca" testId="select-brand">
          {brands}
        </Select>
        <Select placeholder="Modelo" testId="select-model">
          {models}
        </Select>
        <Select
          placeholder="Ano"
          testId="select-year"
          isHidden={years.length === 0 ? true : false}
        >
          {years}
        </Select>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={isValid ? false : true}
          sx={{
            bgcolor: "#5D00BF",
            color: "white",
            paddingY: "6px",
            paddingX: "30px",
            textTransform: "none",
            marginTop: "8px",
          }}
        >
          Consultar preço
        </Button>
      </Box>
    </Container>
  );
}
