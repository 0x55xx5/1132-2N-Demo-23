import Link from "next/link";

export default function Navigation_23() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="quiz1/p1" className="hover:text-accent-400 transition-colors">
           p1
          </Link>
        </li>
        <li>
          <Link href="quiz1/p2" className="hover:text-accent-400 transition-colors">
            p2
          </Link>
        </li>
        <li>
          <Link
            href="quiz1/p3"
            className="hover:text-accent-400 transition-colors"
          >
            P3
          </Link>
        </li>
      </ul>
    </nav>
  );
}
