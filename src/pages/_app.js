import PortfolioContext from "@/contexts/PortfolioContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioContext>
      <Component {...pageProps} />
    </PortfolioContext>
  );
}
