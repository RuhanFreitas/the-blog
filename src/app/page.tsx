import { Suspense } from 'react';
import { PostList } from '../components/PostList';
import { SpinLoader } from '../components/SpinLoader';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { PostHeading } from '../components/PostHeading';
import { PostCover } from '../components/PostCover';

export default async function Page() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <PostCover
                    linkProps={{
                        href: '/post/asjkgja',
                    }}
                    imageProps={{
                        width: 1200,
                        height: 720,
                        src: '/images/bryen_9.png',
                        alt: 'image alt',
                        priority: true,
                    }}
                />

                <div className="flex flex-col sm:justify-center">
                    <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">
                        2025/04/20 10:00am
                    </time>

                    <PostHeading as="h1" url="#">
                        Featured Post Title
                    </PostHeading>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quod, nostrum
                        perferendis quisquam molestiae quo itaque. Est, doloribus itaque saepe quas
                        pariatur tempore odit neque assumenda et ipsam, ut repellat.
                    </p>
                </div>
            </section>

            <Suspense fallback={<SpinLoader />}>
                <PostList />
            </Suspense>

            <footer>
                <p className="py-8">Footer</p>
            </footer>
        </Container>
    );
}
