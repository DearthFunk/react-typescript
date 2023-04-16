import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <main
      className={`flex min-h-screen flex-col ${
        darkMode ? 'light-theme' : 'dark-theme'
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-row grow">
        <NavigationMenu />
        <div className="grow mx-5 my-5 overflow-x-none overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default App;
