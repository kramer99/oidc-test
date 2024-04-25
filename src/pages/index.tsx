import { OidcSecure, useOidc, useOidcUser } from "@axa-fr/react-oidc";

const isBrowser = () => typeof window !== "undefined";

export default function Home() {
  const { isAuthenticated } = useOidc();
  const { oidcUser } = useOidcUser();
  console.log(
    "isBrowser: " +
      isBrowser() +
      ", isAuthenticated: " +
      isAuthenticated +
      ", oidcUser: "
  );
  console.log(oidcUser);

  return (
    <div>
      Anyone can see this
      <OidcSecure>
        <div className="text-red-400">
          Not everybody can see this.... {oidcUser?.email}
        </div>
      </OidcSecure>
    </div>
  );
}
