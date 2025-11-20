import Link from 'next/link';

type PostHeadingProps = {
    children: React.ReactNode;
    url: string;
    as: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag }: PostHeadingProps) {
    const headingClasses = {
        h1: 'text-2xl/tight font-extrabold sm:text-4xl',
        h2: 'text-2xl/tight font-bold',
    };

    return (
        <Tag className={headingClasses[Tag]}>
            <Link className="hover:text-slate-700 transition" href={url}>
                {children}
            </Link>
        </Tag>
    );
}
