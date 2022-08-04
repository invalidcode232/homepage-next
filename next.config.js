/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
});

const nextConfig = withMDX({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        images: { allowFutureImage: true },
    },
});

module.exports = nextConfig;
