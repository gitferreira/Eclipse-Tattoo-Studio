import "./globals.css";
import Header from "./layouts/Header";
import { Inter, Barlow_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
