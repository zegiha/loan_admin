import {TanStackQueryLayout} from '@/shared/ui/atoms'
import type { Metadata } from "next";
import "./globals.css";
import "swiper/css"
import localFont from "next/font/local";
import React from "react";

const wantedSans = localFont({src: '../public/fonts/WantedSansVariable.woff2'})

export const metadata: Metadata = {
  title: "대부중개 어드민 웹사이트",
  description: "대부중개 어드민 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body className={wantedSans.className}>
      <TanStackQueryLayout>
        {children}
        <div id={'modalRoot'}/>
        <div id={'sidepeekRoot'}/>
      </TanStackQueryLayout>
      </body>
    </html>
  );
}
