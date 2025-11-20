import { Post } from '@/src/components/Post';
import { SpinLoader } from '@/src/components/SpinLoader';
import { findPostBySlugCached } from '@/src/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostSlugProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await findPostBySlugCached(slug);

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostSlug({ params }: PostSlugProps) {
    const { slug } = await params;

    return (
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
            <Post slug={slug} />
        </Suspense>
    );
}
