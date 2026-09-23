import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import SmoothScroll from "./components/shared/SmoothScroll";


export const metadata: Metadata = {
  title: "Insurane Agency",
  description: "Insurane Agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
