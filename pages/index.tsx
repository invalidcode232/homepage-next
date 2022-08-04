import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <Layout>
            <MainPage />
        </Layout>
    );
};

export default Home;
