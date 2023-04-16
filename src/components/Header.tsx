import Toggle from 'react-toggle';

type HeaderProps = {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return <section data-testid="header" className="px-6 py-5 border-b-2 flex flex-row">
    <div data-testid="header-title" className="grow">
      <h2>TODO: header title w page route</h2>
    </div>
    <div data-testid="header-darkmode" className="shrink">
      <Toggle
        checked={darkMode}
        icons={false}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  </section>
}
export default Header;
