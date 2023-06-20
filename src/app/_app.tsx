import { ReactNode, useState } from "react";

import { AppProps } from "next/app";

type SharedState = any;
interface MyAppProps extends AppProps {
  sharedState: SharedState;
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [sharedState, setSharedState] = useState<SharedState | null>(null);

  return (
    <Component
      {...pageProps}
      sharedState={sharedState}
      setSharedState={setSharedState}
    />
  );
}

export default MyApp;
