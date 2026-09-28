import { getPosts } from './src/lib/notion';
async function run() {
  const posts = await getPosts();
  console.log(posts.map(p => p.slug).join('\n'));
}
run();
