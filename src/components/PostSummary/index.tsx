import { PostHeading } from '../PostHeading';
import { Date } from '../Date';

type PostSummaryProps = {
    postHeading: 'h1' | 'h2';
    postLink: string;
    createdAt: string;
    title: string;
    excerpt: string;
};

export function PostSummary({
    postHeading,
    postLink,
    createdAt,
    title,
    excerpt,
}: PostSummaryProps) {
    return (
        <div className="flex flex-col sm:justify-center">
            <Date dateTime={createdAt} />

            <PostHeading as={postHeading} url={postLink}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
