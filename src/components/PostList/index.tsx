import { postRepository } from '@/src/repositories/post';
import { PostCover } from '../PostCover';
import { PostHeading } from '../PostHeading';

export async function PostList() {
    const posts = await postRepository.findAll();

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                const postLink = `post/${post.slug}`;

                return (
                    <div key={post.id} className="flex flex-col group gap-4">
                        <PostCover
                            linkProps={{
                                href: postLink,
                            }}
                            imageProps={{
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }}
                        />

                        <div className="flex flex-col sm:justify-center">
                            <time
                                className="text-slate-600 block text-sm/tight"
                                dateTime={post.createdAt}
                            >
                                {post.createdAt}
                            </time>

                            <PostHeading as="h2" url={postLink}>
                                {post.title}
                            </PostHeading>

                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
