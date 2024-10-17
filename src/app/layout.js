import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { ViewportProvider } from "./context/ViewportContext";
import { headers } from "next/headers";
import UnderMaintainance from "./components/undermaintainance/UnderMaintainance";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pullysons",
  description: "Generated by Pullysons",
};

export default function RootLayout({ children }) {
  const header = headers();
  const viewport = header.get("x-viewport");
  const host = header.get("x-host");

  console.log(host, "hosttt");
  if (host === "true") {
    return (
      <html lang="en">
        <body className={inter.className}>
          <UnderMaintainance />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewportProvider value={viewport}>
          <Header />
          <MobileHeader />
          {children}
          <Footer />
        </ViewportProvider>
      </body>
    </html>
  );
}
