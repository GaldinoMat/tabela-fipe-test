import Container from "@mui/material/Container";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ResponseContext } from "@/hooks/useResponse/useResponse";
import { StateContext } from "@/hooks/useSelectedState/useSelectedState";
import { ModeloFipe } from "./types/types";
import FipeResult from "./FipeResult";
import Form from "./Form";

export default function FormContainer() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [fipeInfo, setFipeInfo] = useState<ModeloFipe>();

  const { state: stateContext } = useContext(StateContext);

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { brand, model, year } = stateContext;

    const { Marca, AnoModelo, Modelo, Valor } = await fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`
    ).then((resp) => resp.json());

    setFipeInfo({ Marca, AnoModelo, Modelo, Valor });
  };

  useEffect(() => {
    if (Object.values(stateContext).some((value) => value.length === 0)) {
      setIsValid(false);
      setFipeInfo({
        AnoModelo: 0,
        Modelo: "",
        Valor: "",
        Marca: "",
      });
    } else {
      setIsValid(true);
    }
  }, [stateContext]);

  return (
    <>
      <Container sx={{ marginBottom: "2rem" }} maxWidth="xs">
        <Form handleSubmit={handleSubmit} isValid={isValid} />
      </Container>
      <FipeResult fipeInfo={fipeInfo as ModeloFipe} isValid={isValid} />
    </>
  );
}
