import { JsonPostRepository } from '@/src/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
    const jsonPostRepository = new JsonPostRepository();
    const posts = await jsonPostRepository.findAllPublic();

    try {
        await drizzleDb.delete(postsTable);
        await drizzleDb.insert(postsTable).values(posts);

        console.log(`${posts.length} posts seeded successfully.`);
    } catch (error) {
        console.log('');
        console.log('Error seeding posts:', error);
        console.log('');
    }
})();
