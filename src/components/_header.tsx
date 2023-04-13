// import Toggle from 'react-toggle';

function Header() {
  return <section data-testid="header" className="px-6 py-5 border-b-2 flex flex-row">
    <div data-testid="header-title" className="grow">
      <h2>TODO: header title w page route</h2>
    </div>
    <div data-testid="header-darkmode" className="shrink">
      {/*
      <Toggle
        checked={props.darkMode}
        icons={false}
        onChange={handleDarkModeToggle}
      />
      */}
    </div>
  </section>
}
export default Header;
