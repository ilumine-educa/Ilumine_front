import type { ReactNode } from "react";
import HomeNavbar from "@/src/components/pages-initial/template/navbar";
import HomeFooter from "@/src/components/pages-initial/template/footer";

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
