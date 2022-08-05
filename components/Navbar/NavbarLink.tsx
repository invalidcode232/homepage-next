import Link from 'next/link';
import React from 'react';

type Props = {
    href: string;
    children: React.ReactNode;
    external: boolean;
};

const NavbarLink = (props: Props) => {
    const link = (
        <a
            className="mr-5 hover:underline hover:text-blue-400 hover:cursor-pointer"
            href={props.href}
            {...(props.external && { target: '_blank' })}
        >
            {props.children}
        </a>
    );

    return !props.external ? <Link href={props.href}>{link}</Link> : link;
    // return (
    //     <Link href={props.href}>
    //         <a className="mr-5 hover:underline hover:text-blue-400 hover:cursor-pointer">
    //             {props.children}
    //         </a>
    //     </Link>
    // );
};

export default NavbarLink;
