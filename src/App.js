import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, WagmiConfig, createConfig} from 'wagmi';
import { telosTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";



const chain = telosTestnet;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [chain],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
    }),
    publicProvider(),
  ],
);
const { connectors } = getDefaultWallets({
  appName: "greenrewards",
  projectId:  "c93725f1910953289f7352e7d221ce4a",
  chains,
});
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});











function App() {
  return (

    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}
        theme={darkTheme({
          accentColor: 'rgb(66,113,66)'
        })}>
        <div>
          <AllRoutes />
        </div>

      </RainbowKitProvider>
    </WagmiConfig>




  );
}

export default App;

