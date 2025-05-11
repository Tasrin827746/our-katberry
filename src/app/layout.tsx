import Footer from "@/components/CommonLayout/Footer";
import Navbar from "@/components/CommonLayout/Navbar";
import ClientSocialIcons from "@/components/CommonLayout/ClientLayout";
import "@/styles/global.css";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Katberry Studio",
  description: "A software company",
  icons: {
    icon: "/Katberry.png",
    shortcut: "/Katberry.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="pt-14">
        <Navbar />
        <ClientSocialIcons />
        {children}
        <Footer />
      </body>
    </html>
  );
}
