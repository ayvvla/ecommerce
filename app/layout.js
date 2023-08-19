import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { StoreProvider } from "@/utils/Store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Block Boi",
  description: "Style that commands attention",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} body`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
