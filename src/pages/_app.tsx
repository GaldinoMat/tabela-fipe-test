import { ResponseProvider } from "@/hooks/useResponse/useResponse";
import { StateProvider } from "@/hooks/useSelectedState/useSelectedState";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResponseProvider>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ResponseProvider>
  );
}
