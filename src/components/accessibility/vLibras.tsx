"use client";

import Script from "next/script";

export default function VLibras() {
  return (
    <>
      <div className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          new window.VLibras.Widget(
            "https://vlibras.gov.br/app"
          );
        }}
      />
    </>
  );
}