import type { ReactNode } from "react";
import HomeNavbar from "@/src/components/template/navbar";
import HomeFooter from "@/src/components/template/footer";

export default function InitialPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <HomeNavbar/>
      <main>{children}</main>
      <HomeFooter/>
    </>
  );
}
