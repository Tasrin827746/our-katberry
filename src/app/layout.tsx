import Footer from "@/components/CommonLayout/Footer";
import Navbar from "@/components/CommonLayout/Navbar";
import SocialIcons from "@/components/CommonLayout/SocialIcons"; 
import "@/styles/global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="pt-14">
        <Navbar />
        <SocialIcons /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
