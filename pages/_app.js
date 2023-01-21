import "../styles/globals.css";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import celoGroups from "@celo/rainbowkit-celo/lists"
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";

const { chains, provider } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

// const { chains, provider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum],
//   [
//     alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
//     publicProvider(),
//   ]
// );
// This is Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });
const connectors = celoGroups({chains})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider coolMode chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
