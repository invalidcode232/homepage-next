import React from 'react';
import { FaBars } from 'react-icons/fa';

type Props = {
    navOpen: boolean;
    setNavOpen: () => void;
};

const Hamburger = (props: Props) => {
    const clr = props.navOpen === false ? 'bg-teal-400' : 'bg-teal-500';

    return (
        <button
            className={`${clr} block sm:hidden p-3 rounded-md text-black`}
            onClick={props.setNavOpen}
        >
            <FaBars />
        </button>
    );
};

export default Hamburger;
