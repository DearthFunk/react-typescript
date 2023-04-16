import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <section
      data-testid="navigation-menu"
      className="px-5 py-5 border-r-2 min-w-[200px]"
    >
      <ul className="text-lg">
        <li className="py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="py-2">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="py-2">
          <Link to="/about">About</Link>
        </li>
        <li className="py-2">
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </section>
  );
}

export default NavigationMenu;
