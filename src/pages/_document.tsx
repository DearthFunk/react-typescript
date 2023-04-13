import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import Header from '@/components/_header';
import NavigationMenu from '@/components/_navigation-menu';

export default function Document() {
  let darkMode: boolean = true;

  return (
    <Html lang="en">
      <Head />
      <body className={darkMode ? 'dark-theme' : 'light-theme'}>
        <div className="flex min-h-screen flex-col">
          DARKMODE: {darkMode ? 't' : 'f'}
          <Header />
          <div className="flex flex-row grow">
            <NavigationMenu />
            <div className="grow mx-5 my-5 overflow-x-none overflow-y-auto">
              <Main/>
            </div>
          </div>
        </div>  
        <NextScript />
      </body>
    </Html>
  )
}
