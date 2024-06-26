import Head from "next/head";
import { Roboto } from "next/font/google";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormComponent from "@/components/FormComponent";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import { ResponseContext } from "@/hooks/useResponse/useResponse";
import { ActionType } from "@/hooks/useResponse/types/types";
import { HomeProps } from "@/types/types";
import getFipeInfo from "@/utils/GetFipeInfo";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Home({ brands, error }: HomeProps) {
  const { dispatch } = useContext(ResponseContext);

  useEffect(() => {
    if (error) {
      dispatch({ type: ActionType.AddError });
    } else {
      dispatch({ type: ActionType.AddBrands, payload: brands });
    }
  }, [brands, dispatch, error]);

  return (
    <>
      <Head>
        <title>Tabela Fipe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className}`}>
        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{ bgcolor: "#F9F6FC", height: "100vh", paddingTop: "2.5rem" }}
        >
          <FormComponent />
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getFipeInfo();

  if (data.error) {
    return {
      props: {
        error: true,
      },
    };
  }

  return {
    props: {
      brands: data,
    },
  };
};
