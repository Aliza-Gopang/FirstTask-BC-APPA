// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import "../styles/utility.css";
import { Urbanist } from "next/font/google";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

import BootstrapClient from "./components/BootstrapClient"; // ✅ Import

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "My Next App",
  description: "A responsive app with Navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* ✅ BootstrapClient added */}
        <BootstrapClient />

        {/* Navbar visible on all pages */}
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
