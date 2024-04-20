import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ModeloFipe } from "./types/types";

interface FipeResult {
  fipeInfo: ModeloFipe;
  isValid: boolean;
}

export default function FipeResult({ isValid, fipeInfo }: FipeResult) {
  return (
    <Box>
      {isValid && fipeInfo?.Modelo !== "" && (
        <Box
          data-testid="fipe-result"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: ".75rem",
          }}
        >
          <Typography
            variant="h3"
            color="#424242"
            sx={{ fontSize: "1.5rem", fontWeight: "700" }}
          >
            Tabela Fipe: Preço {fipeInfo.Marca} {fipeInfo.Modelo}{" "}
            {fipeInfo.AnoModelo}
          </Typography>
          <Box
            component="span"
            sx={{
              display: "block",
              bgcolor: "#00a38c",
              width: "fit-content",
              borderRadius: "6.25rem",
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "white",
              padding: ".625rem 1.875rem",
            }}
          >
            {fipeInfo?.Valor}
          </Box>
          <Typography
            variant="body1"
            color="#424242"
            sx={{ fontSize: ".875rem" }}
          >
            Este é preço de compra do veículo
          </Typography>
        </Box>
      )}
    </Box>
  );
}
