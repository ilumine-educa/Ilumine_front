
import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import VLibras from "../components/accessibility/vLibras";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ilumine Educa",
  description:
    "O aprendizado se torna mais acessível, divertido e personalizado.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <VLibras/>
      </body>
    </html>
  );
}
