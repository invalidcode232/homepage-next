import AboutMe from './AboutMe';
import MeDetails from './MeDetails';
import Image from 'next/future/image';

const MainPage = () => {
    return (
        <div className="flex justify-between text-center md:text-left">
            <div>
                <span className="text-2xl text-gray-400 font-mono">
                    Hello, I am{' '}
                </span>
                <h1 className="text-6xl text-bold font-sans tracking-wide mt-3 mb-8">
                    invalidcode
                </h1>
                <AboutMe />
                <MeDetails />
                {/* <button className="text-gray-800 py-2 px-4 rounded-md mt-8 bg-teal-400 hover:bg-teal-500">
                    My works
                </button> */}
            </div>
            <div className="hidden lg:block">
                <Image
                    className="float-right rounded-full"
                    src="https://avatars.githubusercontent.com/u/78639481?v=4"
                    alt="profile picture"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default MainPage;
