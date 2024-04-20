import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "./SelectComponent";
import { ResponseContext } from "@/hooks/useResponse/useResponse";
import { FormTypes } from "./types/types";

export default function Form({ handleSubmit, isValid }: FormTypes) {
  const { state: responseContext } = useContext(ResponseContext);

  const { brands, models, years } = responseContext;

  return (
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
        data-testid="submit-button"
        disabled={isValid ? false : true}
        sx={{
          bgcolor: "#5D00BF",
          color: "white",
          paddingY: ".375rem",
          paddingX: "1.875rem",
          textTransform: "none",
          marginTop: ".5rem",
        }}
      >
        Consultar preço
      </Button>
    </Box>
  );
}
