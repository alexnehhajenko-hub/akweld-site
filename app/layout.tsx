import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akweldsteel.com"),
  title: {
    default: "AKWELD",
    template: "%s | AKWELD",
  },
  description: "Steel structures, fabrication, installation and workforce support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="msvalidate.01"
          content="D9F147ECFE8E001AEB52E97E3AF328FA"
        />
      </head>

      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EM9FBW342Z"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EM9FBW342Z');
        `}
      </Script>

      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vxahk38hmf");
        `}
      </Script>
    </html>
  );
}
