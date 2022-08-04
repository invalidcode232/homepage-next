import Link from 'next/link';
import React from 'react';
import { PostData } from '../../types/type';

type Props = {
    post: PostData;
};

const BlogCard = (props: Props) => {
    return (
        <div className="py-3 px-5 text-white rounded-md bg-slate-700 my-5">
            <a
                className="text-2xl font-semibold hover:cursor-pointer"
                href={`/blogs/${props.post.slug}`}
            >
                {props.post.frontMatter.title}
            </a>
            <br />
            <div className="font-mono text-md text-gray-400 mt-2">
                {props.post.frontMatter.date} |
                {props.post.frontMatter.tags.map((tag: string) => (
                    <Link key={tag} href={`/tags/${tag}`}>
                        <a className="text-gray-400 font-mono mr-2 bg-slate-600 p-1 rounded-sm">
                            {tag}
                        </a>
                    </Link>
                ))}
            </div>
            <p className="font-sans text-md text-white my-3">
                {props.post.frontMatter.description}
            </p>
            <Link href={`/blogs/${props.post.slug}`}>
                <a className="font-mono text-md hover:underline hover:text-blue-500">
                    Read more...
                </a>
            </Link>
        </div>
    );
};

export default BlogCard;
