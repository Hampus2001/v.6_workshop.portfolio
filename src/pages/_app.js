import PortfolioContext from "@/contexts/PortfolioContext";
import "@/styles/globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={merriweather.className}>
      <PortfolioContext>
        <Component {...pageProps} />
      </PortfolioContext>
    </main>
  );
}
