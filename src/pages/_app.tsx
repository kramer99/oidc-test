import "@/styles/globals.css";
import { OidcConfiguration, OidcProvider } from "@axa-fr/react-oidc";
import type { AppProps } from "next/app";

const oidcConfig: OidcConfiguration = {
  authority: "", // ...edit this
  client_id: "", // ...edit this
  service_worker_only: false,
  scope: "openid profile email offline_access", // ...edit this
  redirect_uri: "http://localhost:3000/ibor/callback",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OidcProvider configuration={oidcConfig}>
      <Component {...pageProps} />
    </OidcProvider>
  );
}
