import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
    markdown: string;
};

export function Markdown({ markdown }: MarkdownProps) {
    return (
        <div className="prose prose-slate w-full max-w-none overflow-hidden prose-a:transition prose-a:no-underline prose-a:text-blue-600 prose-a:hover:text-blue-700 prose-a:hover:underline prose-img:mx-auto md:prose-lg">
            <ReactMarkDown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkDown>
        </div>
    );
}
