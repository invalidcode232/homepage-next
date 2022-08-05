import React from 'react';
import { FaGithub } from 'react-icons/fa';

type Props = {
    title: string;
    description: string;
    technologies: string[];
    repository?: string;
};

const WorkCard = (props: Props) => {
    return (
        <div className="w-2/5 mr-3 mb-3 bg-slate-700 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold">{props.title}</h1>
            <div className="flex font-mono text-sm mt-2">
                {/* <div className="bg-slate-500 px-2 rounded-md mr-2">node.js</div>
                <div className="bg-slate-500 px-2 rounded-md mr-2">
                    selenium
                </div> */}
                {props.technologies.map((tech, index) => (
                    <div
                        className="bg-slate-500 px-2 rounded-md mr-2"
                        key={index}
                    >
                        {tech}
                    </div>
                ))}
            </div>
            <p className="text-md font-sans text-gray-200 mt-2 mb-3">
                {props.description}
            </p>
            {props.repository && (
                <a
                    className="text-gray-400 hover:underline hover:text-blue-500 hover:cursor-pointer font-mono"
                    href={props.repository}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    <FaGithub className="inline mr-1" />
                    view repo
                </a>
            )}
        </div>
    );
};

export default WorkCard;
