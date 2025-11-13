import { Suspense } from 'react';
import { PostList } from '../components/PostList';
import { SpinLoader } from '../components/SpinLoader';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { PostHeading } from '../components/PostHeading';

export default async function Page() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
                    <Image
                        className="group-hover:scale-105 transition w-full h-full object-cover object-center"
                        src="/images/bryen_0.png"
                        width={1200}
                        height={720}
                        alt="Post title"
                        priority
                    />
                </Link>

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
