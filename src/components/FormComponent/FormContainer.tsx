import Container from "@mui/material/Container";
import { FormEvent, useContext, useEffect, useState } from "react";
import { StateContext } from "@/hooks/useSelectedState/useSelectedState";
import { ModeloFipe } from "./types/types";
import FipeResult from "./FipeResult";
import Form from "./Form";
import getFipeInfo from "../../utils/GetFipeInfo";
import { ResponseContext } from "@/hooks/useResponse/useResponse";

export default function FormContainer() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [fipeInfo, setFipeInfo] = useState<ModeloFipe>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { state: stateContext } = useContext(StateContext);
  const { state: responseContext } = useContext(ResponseContext);

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { brand, model, year } = stateContext;

    const { Marca, AnoModelo, Modelo, Valor } = await getFipeInfo(
      brand,
      model,
      year
    );

    setFipeInfo({ Marca, AnoModelo, Modelo, Valor });
  };

  useEffect(() => {
    const { errorMessage } = responseContext;

    if (
      Object.values(stateContext).some((value) => value.length === 0) ||
      errorMessage.length !== 0
    ) {
      setIsValid(false);
      setErrorMessage(errorMessage);
      setFipeInfo({
        AnoModelo: 0,
        Modelo: "",
        Valor: "",
        Marca: "",
      });
    } else {
      setIsValid(true);
    }
  }, [responseContext, stateContext]);

  useEffect(() => {
    setFipeInfo({
      AnoModelo: 0,
      Modelo: "",
      Valor: "",
      Marca: "",
    });
  }, [stateContext]);

  return (
    <>
      <Container sx={{ marginBottom: "2rem" }} maxWidth="xs">
        <Form handleSubmit={handleSubmit} isValid={isValid} />
      </Container>
      <FipeResult
        errorMessage={errorMessage as string}
        fipeInfo={fipeInfo as ModeloFipe}
        isValid={isValid}
      />
    </>
  );
}
