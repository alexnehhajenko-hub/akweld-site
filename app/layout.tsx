import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "AKWELD",
  description: "Steel structures, fabrication, installation, workforce rental",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
    </html>
  );
}
