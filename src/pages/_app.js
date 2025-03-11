import PortfolioContext from "@/contexts/PortfolioContext";
import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import NavBar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={merriweather.className} data-theme="dark">
      <PortfolioContext>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </PortfolioContext>
    </main>
  );
}
