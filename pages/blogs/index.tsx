import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../../components/Layout';

type Post = {
    frontMatter: {
        [key: string]: any;
        title: string;
        date: string;
        description: string;
    };
    slug: string;
};

const BlogIndex = ({ posts }: { posts: Post[] }) => {
    console.log(posts);
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-5">Blogs 📕</h1>
            <div className="posts md:grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link href={`/blogs/${post.slug}`} key={post.slug}>
                        <a
                            href={`/blogs/${post.slug}`}
                            className="font-mono text-xl hover:underline hover:text-blue-500"
                        >
                            {post.slug}
                        </a>
                    </Link>
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

    // Return all the posts frontMatter and slug as props
    return {
        props: {
            posts,
        },
    };
}
