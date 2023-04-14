import Link from 'next/link'

function NavigationMenu() {
  return <section data-testid="navigation-menu" className="px-5 py-5 border-r-2">
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/projects'>Projects</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/help'>Help</Link></li>
    </ul>
  </section>
}

export default NavigationMenu;
