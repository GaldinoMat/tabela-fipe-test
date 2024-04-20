import Head from "next/head";
import { Roboto } from "next/font/google";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormComponent from "@/components/FormComponent";
import { GetStaticProps } from "next";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

interface HomeProps {
  models: [código: string, nome: string];
}

export default function Home({ models }: HomeProps) {
  


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className}`}>
        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{ bgcolor: "#F9F6FC", height: "100vh" }}
        >
          <FormComponent />
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  ).then((res) => res.json());

  return {
    props: {
      models: data,
    },
  };
};
