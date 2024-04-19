import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>Tabela Fipe</h1>
        <FormControl>
          <FormLabel>Consulte o valor de um veiculo de forma gratuita</FormLabel>
          
          <FormHelperText></FormHelperText>
        </FormControl>
      </Container>
    </main>
  );
}
