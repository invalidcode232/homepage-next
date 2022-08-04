import Link from 'next/link';
import React from 'react';

type Props = {
    href: string;
    children: React.ReactNode;
};

const NavbarLink = (props: Props) => {
    return (
        <Link href={props.href}>
            <div className="mr-5 hover:underline hover:text-blue-400 hover:cursor-pointer">
                {props.children}
            </div>
        </Link>
    );
};

export default NavbarLink;
