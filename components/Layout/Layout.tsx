import Head from 'next/head';
import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    const router = useRouter();

    return (
        <div className="bg-slate-800 px-5 md:px-8 lg:px-[17rem] py-3 text-white w-screen h-screen flex flex-col">
            <Head>
                <title>invalid.codes</title>
                <meta
                    name="description"
                    content="invalidcode232's personal homepage"
                />
            </Head>
            <Navbar />
            <main className="w-full h-full mt-20">
                <motion.div
                    key={router.route}
                    initial="initial"
                    animate="animate"
                    variants={{
                        initial: {
                            y: -10,
                            opacity: 0,
                        },
                        animate: {
                            y: 0,
                            opacity: 1,
                        },
                    }}
                    transition={{ duration: 0.5, delay: 0 }}
                >
                    {props.children}
                </motion.div>
            </main>
        </div>
    );
};

export default Layout;
