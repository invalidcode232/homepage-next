import fs from 'fs';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import path from 'path';
import BlogCard from '../../components/Blog/BlogCard';
import Layout from '../../components/Layout';
import { PostData } from '../../types/type';

const BlogIndex = ({ posts }: { posts: PostData[] }) => {
    return (
        <Layout title="Blogs">
            <h1 className="text-4xl font-bold mb-8">Blogs 📕</h1>
            <div className="mt-5">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </Layout>
    );
};

export default BlogIndex;

export async function getStaticProps() {
    let files = fs.readdirSync(path.join('posts'));

    files = files.filter((file) => file.split('.')[1] === 'mdx');

    const posts = await Promise.all(
        files.map((file) => {
            const markdownWithMeta = fs.readFileSync(
                path.join('posts', file),
                'utf-8',
            );

            const { data: frontMatter } = matter(markdownWithMeta);

            return {
                frontMatter,
                slug: file.split('.')[0],
            };
        }),
    );

    return {
        props: {
            posts,
        },
    };
}
