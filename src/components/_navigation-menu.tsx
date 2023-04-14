import Link from 'next/link'

function NavigationMenu() {
  return <section data-testid="navigation-menu" className="px-5 py-5 border-r-2 min-w-[200px]">
    <ul className="text-lg">
      <li className="py-2"><Link href='/'>Home</Link></li>
      <li className="py-2"><Link href='/project'>Projects</Link></li>
      <li className="py-2"><Link href='/about'>About</Link></li>
      <li className="py-2"><Link href='/help'>Help</Link></li>
    </ul>
  </section>
}

export default NavigationMenu;
