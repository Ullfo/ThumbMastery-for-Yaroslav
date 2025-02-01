import type { Metadata } from "next";
import "./globals.css";
import PageHeader from "@/templates/PageLayout/PageHeader/PageHeader";
import PageFooter from "@/templates/PageLayout/PageFooter/PageFooter";

export const metadata: Metadata = {
   title: "ThumbMastery - YouTube Thumbnails That Drive Sales",
   description:
      "Transform your YouTube channel into a sales machine with ThumbMastery. Custom thumbnails based on viewer psychology and data-driven strategies to increase views, CTR, and revenue. Save time and boost your channel's performance with expert video packaging.",
   keywords:
      "YouTube thumbnails, business YouTube channels, increase CTR, YouTube sales machine, video packaging, custom thumbnails, viewer psychology, split-testing, YouTube growth, YouTube revenue",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <meta property="og:image" content="/main-img.png" />
         </head>
         <body>
            <PageHeader />
            {children}
            <PageFooter />
         </body>
      </html>
   );
}
