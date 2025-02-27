import "./globals.css";
import { Roboto, Roboto_Mono } from "next/font/google";
import Footer from "@/ui/footer";
import Header from "@/ui/header";
import ButtonTop from "@/ui/button/button-top";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "StarWars Universe",
  description: "This is an educational website with swapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} app antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* <div className='flex flex-col min-h-screen bg-cover bg-center bg-[url("/bg/bg5.jpg")]'> */}
          <Header />
          <div className="noise-bg"></div>
          <ButtonTop />
          <div className="relative m-3 flex-1 pt-[80px] sm:m-8">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
