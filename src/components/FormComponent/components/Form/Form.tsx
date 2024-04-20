import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "../Select/SelectComponent";
import { useContext } from "react";
import { ResponseContext } from "@/hooks/useResponse";

export default function Form() {
  const { state } = useContext(ResponseContext);

  return (
    <Container maxWidth="xs">
      <Box
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
        <Select
          // children={models}
          placeholder="Marca"
          testId="select-car"
          value=""
        />
        <Select placeholder="Modelo" testId="select-model" value="" />
        <Select placeholder="Ano" testId="select-year" isHidden value="" />
        <Button
          variant="contained"
          color="primary"
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
