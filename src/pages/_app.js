import PortfolioContext from "@/contexts/PortfolioContext";
import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import ImagesContext from "../contexts/imagesContext";
import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={merriweather.className} data-theme="dark">
      <ImagesContext>
        <PortfolioContext>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </PortfolioContext>
      </ImagesContext>
    </main>
  );
}
