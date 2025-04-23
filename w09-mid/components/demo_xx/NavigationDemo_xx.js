import Link from 'next/link';

export default function NavigationDemo_xx() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/demo_xx/w02_tailwind_xx'
            className='hover:text-accent-400 transition-colors'
          >
            w2_tailwind_xx
          </Link>
        </li>
        <li>
          <Link
            href='/demo_xx/w05_oasis_xx'
            className='hover:text-accent-400 transition-colors'
          >
            w5_oasis_xx
          </Link>
        </li>
        <li>
          <Link
            href='/demo_xx/w06_blog_xx'
            className='hover:text-accent-400 transition-colors'
          >
            w6_blog_xx
          </Link>
        </li>
        <li>
          <Link
            href='/demo_xx/w08_booklist_xx'
            className='hover:text-accent-400 transition-colors'
          >
            w8_booklist_xx
          </Link>
        </li>
      </ul>
    </nav>
  );
}
