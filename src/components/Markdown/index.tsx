import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
    markdown: string;
};

export function Markdown({ markdown }: MarkdownProps) {
    return (
        <div>
            <ReactMarkDown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkDown>
        </div>
    );
}
