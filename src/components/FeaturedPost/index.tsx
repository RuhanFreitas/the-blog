import { PostCover } from '../PostCover';
import { PostSummary } from '../PostSummary';

export function FeaturedPost() {
    const slug = '';
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCover
                linkProps={{
                    href: postLink,
                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: '/images/bryen_9.png',
                    alt: 'image alt',
                    priority: true,
                }}
            />

            <PostSummary
                postHeading="h1"
                postLink={postLink}
                createdAt={'2025-04-08T00:24:38.616Z'}
                excerpt="Blablabla"
                title="Blablabla"
            />
        </section>
    );
}
