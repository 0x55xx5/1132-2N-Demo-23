import Link from 'next/link';

export default function NavigationMid1_xx() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/mid1_xx/p1_xx'
            className='hover:text-accent-400 transition-colors'
          >
            p1_xx
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_xx/p2_xx'
            className='hover:text-accent-400 transition-colors'
          >
            p2_xx
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_xx/p3_xx'
            className='hover:text-accent-400 transition-colors'
          >
            p3_xx
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_xx/p4_xx'
            className='hover:text-accent-400 transition-colors'
          >
            p4_xx
          </Link>
        </li>
      </ul>
    </nav>
  );
}
