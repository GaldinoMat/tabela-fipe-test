import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormContainer from "./FormContainer";

export default function FormComponent() {
  return (
    <Box component="section">
      <Typography
        variant="h1"
        color="#424242"
        sx={{
          textAlign: "center",
          fontSize: "1.75rem",
          fontWeight: "700",
          marginBottom: ".75rem",
        }}
      >
        Tabela Fipe
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "1.25rem",
          whiteSpace: "nowrap",
          fontWeight: "700",
          color: "#424242",
          marginBottom: "1rem",
        }}
      >
        Consulte o valor de um veiculo de forma gratuita
      </Typography>
      <FormContainer />
    </Box>
  );
}
