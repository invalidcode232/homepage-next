import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import WorkCard from '../../components/MyWorks/WorkCard';

const Home: NextPage = () => {
    return (
        <Layout title="My works">
            <h1 className="text-4xl font-semibold mb-8">My works</h1>
            <div className="flex flex-wrap">
                <WorkCard
                    title="Steam ID Scraper"
                    description="A web scraper that scrapes Steam ID from a Steam profile URL."
                    technologies={['desktop', 'node.js', 'selenium']}
                    repository="https://github.com/invalidcode232/scraper-bot"
                />
                <WorkCard
                    title="multitranslate"
                    description="A website that translates a text through multiple languages"
                    technologies={['web', 'react', 'chakra-ui']}
                    repository="https://github.com/invalidcode232/multitranslate"
                />
                <WorkCard
                    title="run50"
                    description="A running tracker stats app."
                    technologies={['web', 'django']}
                    repository="https://github.com/invalidcode232/Run50"
                />
            </div>
        </Layout>
    );
};

export default Home;
