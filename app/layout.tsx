import { Open_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",   
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Added 900 for font-black
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${poppins.variable}`} 
    >
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}