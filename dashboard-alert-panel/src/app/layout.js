"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "../components/SideMenu/SideMenu";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  if(usePathname() === "/"){
    return (
      <html lang="pt-br">
        <body className={`${inter.className} flex justify-center items-center h-screen`}>
          {children}
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <SideMenu />
        <div className="flex flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}