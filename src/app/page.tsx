import { Suspense } from 'react';
import { PostList } from '../components/PostList';
import { SpinLoader } from '../components/SpinLoader';
import { FeaturedPost } from '../components/FeaturedPost';

export default async function Page() {
    return (
        <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
            <FeaturedPost />

            <PostList />
        </Suspense>
    );
}
