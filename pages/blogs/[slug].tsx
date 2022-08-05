import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../components/Layout';
import styles from '../../styles/Post.module.css';
import { PostData } from '../../types/type';

const components = {};

const PostPage = ({ frontMatter: { title, date }, mdxSource }: PostData) => {
    return (
        <Layout title={title}>
            <h1 className="font-semibold text-3xl mb-2">{title}</h1>
            <span className="text-gray-400 font-mono mb-5">{date}</span>
            <div className={styles.post}>
                <MDXRemote {...mdxSource} components={components} />
            </div>
        </Layout>
    );
};

const getStaticPaths = () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((file) => {
        return {
            params: {
                slug: file.replace('.mdx', ''),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

type StaticProps = {
    params: {
        slug: string;
    };
};

const getStaticProps = async ({ params: { slug } }: StaticProps) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'));

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
