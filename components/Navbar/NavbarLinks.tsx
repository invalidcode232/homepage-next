import React from 'react';
import { FaBook, FaGithub, FaSpotify } from 'react-icons/fa';
import NavbarLink from './NavbarLink';

type Props = {};

const NavbarLinks = (props: Props) => {
    return (
        <div className={'flex'}>
            <NavbarLink href="https://open.spotify.com/playlist/2LwDo5R8Po8m1CeWdD0Hvy?si=5cdf28ff64f1472a">
                <FaBook className="inline mr-1" />
                blogs/
            </NavbarLink>
            <NavbarLink href="https://github.com/invalidcode232/homepage">
                <FaGithub className="inline mr-1" />
                src/
            </NavbarLink>
            <NavbarLink href="https://open.spotify.com/playlist/2LwDo5R8Po8m1CeWdD0Hvy?si=5cdf28ff64f1472a">
                <FaSpotify className="inline mr-1" />
                playlist
            </NavbarLink>
        </div>
    );
};

export default NavbarLinks;
