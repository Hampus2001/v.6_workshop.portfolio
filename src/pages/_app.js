import PortfolioContext from "@/contexts/PortfolioContext";
import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import ImagesContext from "../contexts/imagesContext";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={merriweather.className} data-theme="dark">
      <ImagesContext>
        <PortfolioContext>
          <Component {...pageProps} />
        </PortfolioContext>
      </ImagesContext>
    </main>
  );
}
