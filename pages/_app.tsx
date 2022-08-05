import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        // <motion.div
        //     key={router.route}
        //     initial="initial"
        //     animate="animate"
        //     variants={{
        //         initial: {
        //             y: -10,
        //             opacity: 0,
        //         },
        //         animate: {
        //             y: 0,
        //             opacity: 1,
        //         },
        //     }}
        //     transition={{ duration: 0.5, delay: 0 }}
        // >
        //     <Component {...pageProps} />
        // </motion.div>

        <Component {...pageProps} />
    );
}

export default MyApp;
