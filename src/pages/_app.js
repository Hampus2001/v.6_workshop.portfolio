import PortfolioContext from "@/contexts/PortfolioContext";
import ThemeContext, { HandleThemeContext } from "@/contexts/ThemeContext";
import "@/styles/globals.css";
import { Merriweather } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext } from "react";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

function MainLayout({ Component, pageProps }) {
  const { theme } = useContext(HandleThemeContext);

  console.log("theme", theme);

  return (
    <main className={merriweather.className} data-theme={theme}>
      <PortfolioContext>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </PortfolioContext>
    </main>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeContext>
      <MainLayout Component={Component} pageProps={pageProps} />
    </ThemeContext>
  );
}
