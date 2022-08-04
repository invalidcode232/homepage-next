import React, { useState } from 'react';
import Hamburger from './Hamburger';
import NavDropdown from './NavDropdown';

type Props = {};

const MobileNav = (props: Props) => {
    const [navOpen, setNavOpen] = useState(false);

    const navOpenHandler = () => {
        setNavOpen((navOpen) => !navOpen);
    };

    return (
        <>
            <Hamburger navOpen={navOpen} setNavOpen={navOpenHandler} />
            <NavDropdown navOpen={navOpen} />
        </>
    );
};

export default MobileNav;
