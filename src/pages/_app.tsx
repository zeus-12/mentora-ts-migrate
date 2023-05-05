import Layout from "../components/Layout";
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { options } from "../lib/SWR";
import { AppProps } from "next/app";

interface Props extends AppProps {
  session: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider refetchInterval={0} session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Notifications />
        <SWRConfig value={options}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
        {/* </NotificationsProvider> */}
      </MantineProvider>
    </SessionProvider>
  );
};

export default MyApp;
