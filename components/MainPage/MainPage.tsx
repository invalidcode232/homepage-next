import AboutMe from './AboutMe';
import MeDetails from './MeDetails';
import Image from 'next/image';

const MainPage = () => {
    return (
        <>
            <div>
                <span className="text-lg text-gray-400 font-mono">
                    Hello, I am{' '}
                </span>
                <h1 className="text-5xl text-bold font-sans tracking-wide mt-3 mb-5">
                    invalidcode
                </h1>
                <AboutMe />
                <MeDetails />
            </div>
            <div>
                <Image
                    className="float-right w-4/5 rounded-full"
                    src="https://avatars.githubusercontent.com/u/78639481?v=4"
                    alt="profile picture"
                    width={200}
                    height={200}
                />
            </div>
        </>
    );
};

export default MainPage;
