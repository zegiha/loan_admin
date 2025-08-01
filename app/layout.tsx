import {GlobalRouterLayout, TanStackQueryLayout} from '@/shared/ui/atoms'
import type { Metadata } from "next";
import "./globals.css";
import "swiper/css"
import localFont from "next/font/local";
import React from "react";

const wantedSans = localFont({src: '../public/fonts/WantedSansVariable.woff2'})

export const metadata: Metadata = {
  title: "대출센터 관리자",
  description: "대출센터 관리자용 웹사이트",
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
        <GlobalRouterLayout>
          {children}
          <div id={'modalRoot'}/>
          <div id={'sidepeekRoot'}/>
        </GlobalRouterLayout>
      </TanStackQueryLayout>
      </body>
    </html>
  );
}
