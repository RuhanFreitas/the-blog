import { Suspense } from 'react';
import { PostList } from '../components/PostList';
import { SpinLoader } from '../components/SpinLoader';
import { FeaturedPost } from '../components/FeaturedPost';

export default async function Page() {
    return (
        <>
            <FeaturedPost />

            <Suspense fallback={<SpinLoader />}>
                <PostList />
            </Suspense>
        </>
    );
}
