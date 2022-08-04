import React from 'react';
import { FaBars } from 'react-icons/fa';

type Props = {
    navOpen: boolean;
    setNavOpen: () => void;
};

const Hamburger = (props: Props) => {
    const clr = props.navOpen === false ? 'bg-blue-500' : 'bg-blue-600';

    return (
        <button
            className={`${clr} block sm:hidden p-3 rounded-md`}
            onClick={props.setNavOpen}
        >
            <FaBars />
        </button>
    );
};

export default Hamburger;
