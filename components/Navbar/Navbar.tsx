import Link from 'next/link';
import MobileNav from './Mobile/MobileNav';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <header className="flex justify-between font-mono">
            <Link href="/">
                <span className="text-xl hover:cursor-pointer">
                    invalid.codes
                </span>
            </Link>
            <div className="hidden md:flex">
                <NavbarLinks />
            </div>
            <MobileNav />
        </header>
    );
};

export default Navbar;
