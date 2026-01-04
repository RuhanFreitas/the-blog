import { findAllPostAdmin } from '@/src/lib/post/queries/admin';
import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Post Admin',
};

export default async function PostPage() {
    const posts = await findAllPostAdmin();

    return (
        <div className="py-16 text-6xl">
            {posts.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}
