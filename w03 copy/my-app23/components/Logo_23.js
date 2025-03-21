import Image from "next/image";
import Logo from "@/public/logo.png";
import Link  from "next/link";
function Logo_23() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={Logo}  height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo_23;
