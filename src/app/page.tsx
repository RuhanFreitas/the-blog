import { Suspense } from 'react';
import { PostList } from '../components/PostList';
import { SpinLoader } from '../components/SpinLoader';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { PostHeading } from '../components/PostHeading';
import { PostCover } from '../components/PostCover';
import { FeaturedPost } from '../components/FeaturedPost';

export default async function Page() {
    return (
        <Container>
            <Header />

            <FeaturedPost />

            <Suspense fallback={<SpinLoader />}>
                <PostList />
            </Suspense>

            <footer>
                <p className="py-8">Footer</p>
            </footer>
        </Container>
    );
}
