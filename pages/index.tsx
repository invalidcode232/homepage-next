import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MainPage from '../components/MainPage';

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<MainPage />
		</Layout>
	);
};

export default Home;
