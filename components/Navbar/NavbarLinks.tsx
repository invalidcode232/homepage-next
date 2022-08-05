import React from 'react';
import { FaBook, FaGithub, FaSpotify, FaStar } from 'react-icons/fa';
import NavbarLink from './NavbarLink';

type Props = {};

const NavbarLinks = (props: Props) => {
    return (
        <div className={'flex flex-col md:flex-row'}>
            <NavbarLink href="/my-works" external={false}>
                <FaStar className="inline mr-1" />
                my-works/
            </NavbarLink>
            <NavbarLink href="/blogs" external={false}>
                <FaBook className="inline mr-1" />
                blogs/
            </NavbarLink>
            <NavbarLink
                href="https://github.com/invalidcode232/homepage-next"
                external={true}
            >
                <FaGithub className="inline mr-1" />
                src/
            </NavbarLink>
            <NavbarLink
                href="https://open.spotify.com/playlist/2LwDo5R8Po8m1CeWdD0Hvy?si=5cdf28ff64f1472a"
                external={true}
            >
                <FaSpotify className="inline mr-1" />
                playlist
            </NavbarLink>
        </div>
    );
};

export default NavbarLinks;
