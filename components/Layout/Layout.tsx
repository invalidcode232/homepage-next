import Head from 'next/head';
import React from 'react';
import Navbar from '../Navbar';

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <div className="bg-slate-800 px-2 md:px-8 lg:px-[17rem] py-3 text-white w-screen h-screen flex flex-col">
            <Head>
                <title>invalid.codes</title>
                <meta
                    name="description"
                    content="invalidcode232's personal homepage"
                />
            </Head>
            <Navbar />
            <main className="w-full h-full mt-20">{props.children}</main>
        </div>
    );
};

export default Layout;
