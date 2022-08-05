import {
    FaBriefcase,
    FaCode,
    FaEnvelope,
    FaGithub,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const MeDetails = () => {
    return (
        <>
            <div className="font-mono text-gray-300 mt-10 leading-7 text-lg">
                <FaBriefcase className="inline mr-2" />
                Full time <span className="text-blue-500">student</span>
                <br />
                <FaMapMarkerAlt className="inline mr-2" />
                Jakarta, <span className="text-blue-500">Indonesia</span> 🇮🇩
                <br />
                <FaGithub className="inline mr-2" />
                github.com/
                <a
                    href="https://github.com/invalidcode232"
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className="hover:underline hover:text-blue-500"
                >
                    <span className="text-blue-500">invalidcode232</span>
                </a>
                <br />
                <FaCode className="inline mr-2" />
                <span className="text-blue-500">TypeScript</span> /{' '}
                <span className="text-blue-500">Python</span> /{' '}
                <span className="text-blue-500">SQL</span> /{' '}
                <span className="text-blue-500">Lua</span>
                <br />
                <FaEnvelope className="inline mr-2" />
                invalidcode232@protonmail.com{' '}
                <a
                    href="mailto:invalidcode232@protonmail.com"
                    className="hover:underline text-blue-500"
                >
                    (contact me)
                </a>
            </div>
        </>
    );
};

export default MeDetails;
