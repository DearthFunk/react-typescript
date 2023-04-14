import '@/styles/global.css'
import 'react-toggle/style.css'
import '@/styles/run-state.css';
import type { AppProps } from 'next/app'
import Header from '@/components/_header';
import NavigationMenu from '@/components/_navigation-menu';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  let [ darkMode, setDarkMode ] = useState<boolean>(false);
  return (
    <main className={`flex min-h-screen flex-col ${darkMode ? "light-theme" : "dark-theme"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-row grow">
        <NavigationMenu />
        <div className="grow mx-5 my-5 overflow-x-none overflow-y-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  )  
}
