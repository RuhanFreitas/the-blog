import { postRepository } from '@/src/repositories/post';
import { PostCover } from '../PostCover';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/src/lib/post/queries';

export async function FeaturedPost() {
    const posts = await findAllPublicPostsCached();
    const post = posts[0];

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
                    src: post.coverImageUrl,
                    alt: post.title,
                    priority: true,
                }}
            />

            <PostSummary
                postHeading="h1"
                postLink={postLink}
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                title={post.title}
            />
        </section>
    );
}
