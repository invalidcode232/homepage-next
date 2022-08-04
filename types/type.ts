type PostData = {
    frontMatter: {
        [key: string]: any;
        title: string;
        date: string;
        description: string;
    };
    slug: string;
    mdxSource: {
        body: string;
        compiledSource: string;
    };
};

export type { PostData };
