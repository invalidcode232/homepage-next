import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <header className="flex justify-between font-mono">
            <a className="text-xl hover:cursor-pointer">invalid.codes</a>
            <NavbarLinks />
        </header>
    );
};

export default Navbar;
