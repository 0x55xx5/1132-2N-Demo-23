import Image from "next/image";
import Link from "next/link";
import { EllipsisVertical,ShoppingCart ,User,UserIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/dark_toggle";
import ModeToggleTest from "@/components/shared/dark_toggle/test";
const Header23=()=>{
        return <header className='w-full border-b'
        >
            <div className="wrapper flex-between">

                
                <div className="flex-start">
                    <Link href='/'>
                            <Image src='/images/logo.svg' height={48} width={48} priority={true} alt='XXXX' />
                    </Link>
                </div>
                <div className="flex justify-end">
                <ModeToggleTest />   
                    <ModeToggle />    
                    <Button asChild variant="outline">
                        <Link href='/cart' >
                            <ShoppingCart />
                            cart_23
                        </Link>

                    </Button>
                    <Button asChild>
                        <Link href='/sign-in' >
                            <UserIcon />
                            sign
                        </Link>

                    </Button>
                </div>
            </div>
        </header>
}
export default Header23;