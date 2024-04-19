import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormComponent from "./components/FormComponent";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#F9F6FC", height: "100vh" }}>
        <FormComponent />
      </Container>
    </main>
  );
}
