import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import ProviderWrapper from "./ProviderWrapper";
import "./firebase/firebaseCalls";

const outfit = Outfit({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Resume Mosaic",
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <link rel="shortcut icon" href="RM.svg" type="image/x-icon" />
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
