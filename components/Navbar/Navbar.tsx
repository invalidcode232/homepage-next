import Hamburger from './Mobile/Hamburger';
import MobileNav from './Mobile/MobileNav';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <header className="flex justify-between font-mono">
            <a className="text-xl hover:cursor-pointer">invalid.codes</a>
            <div className="hidden md:flex">
                <NavbarLinks />
            </div>
            <MobileNav />
        </header>
    );
};

export default Navbar;
