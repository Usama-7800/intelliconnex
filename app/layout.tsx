import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { LayoutWrapper } from "./components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5D2V6SF9');`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Your Organization Name",
  "url": "https://www.yourwebsite.com",
  "logo": "https://www.yourwebsite.com/logo.png"
}`,
          }}
        />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4RVW5VXE7F"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-4RVW5VXE7F'); `,
          }}
        />
        <meta
          name="google-site-verification"
          content="jvatA9OcztmVrDGtLRYdF3gG849BAJjZJ1NwMiMW4cY"
        />
        <link rel="canonical" href="https://intelliconnex.com" />
      </head>
      <body className={inter.className}>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5D2V6SF9');
`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5D2V6SF9"
            height="0"
            width="0"
            style="display: none; visibility: hidden;"
          ></iframe>`,
          }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
