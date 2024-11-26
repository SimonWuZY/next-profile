import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import 'github-markdown-css'; // Add GitHub-style markdown CSS

const md = new MarkdownIt({
    html: true,        // Enable HTML tags in source
    xhtmlOut: true,    // Use '/' to close single tags (<br />)
    breaks: true,      // Convert '\n' in paragraphs into <br>
    linkify: true,     // Autoconvert URL-like text to links
    typographer: true  // Enable some language-neutral replacement + quotes beautification
});

async function fetchPosts(slug) {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }) {
    const post = await fetchPosts(params.slug);
    if (!post) {
        notFound();

    }

    const htmlContent = md.render(post.content);

    return (
        <article className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.data.title}</h1>
            <p className="text-gray-600 mb-8">{post.data.date}</p>
            <div
                className="markdown-body prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </article>
    );
}

