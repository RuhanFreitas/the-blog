import { findPostBySlugCached } from '@/src/lib/post/queries';

type PostProps = {
    slug: string;
};

export async function Post({ slug }: PostProps) {
    const post = await findPostBySlugCached(slug);

    return (
        <div>
            <p>{post.slug}</p>
        </div>
    );
}
