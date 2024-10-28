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
  title: "Pullys - Since 1978",
  description:
    "Welcome to Pullys! Since 1978, we've been a leader in trading spices, F&B, fabrics, and industrial materials, while offering top-notch MEP, HVAC, and mechanical services. Our manufacturing division creates premium pet accessories and food. Serving India, Saudi Arabia, Bahrain, and Morocco, we deliver innovation, trust, and excellence to 1000+ happy customers.",
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
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://www.pullysons.com/openGraphImage.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
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
