import React from 'react';
import NavbarLinks from '../NavbarLinks';

type Props = {
    navOpen: boolean;
};

const NavDropdown = (props: Props) => {
    if (!props.navOpen) return <></>;

    return (
        <div className="bg-slate-900 rounded-lg p-4 block sm:hidden absolute right-0 top-14">
            <NavbarLinks />
        </div>
    );
};

export default NavDropdown;
