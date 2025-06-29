import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "./globals.css";

import ThemeProviderContext from "@/common/stores/theme";

import { METADATA } from "@/common/constants/metadata";
import { onestSans as interSans } from "@/common/styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://seung-portfolio.vercel.app"),
  title: METADATA.creator,
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: "https://seung-portfolio.vercel.app",
  },
  openGraph: {
    images: METADATA.profile,
    url: "https://seung-portfolio.vercel.app",
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = 'kr'; // Default locale
  const messages = await getMessages({ locale });
  
  // Temporarily disable session for troubleshooting
  const session = null;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="8e2c9f27-a12b-48ca-8130-808ebe377aca"
      ></Script>
      <body className={interSans.className}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <NextIntlClientProvider messages={messages}>

            <ThemeProviderContext>
             {children}
            </ThemeProviderContext>

        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
