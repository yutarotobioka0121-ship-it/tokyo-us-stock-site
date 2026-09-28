const fs = require('fs');

const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
`export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}`,
`export async function generateStaticParams() {
  // Notion APIの429エラーを回避するため、ビルド時の静的生成は行わず
  // アクセス時にオンデマンドで生成（ISR）させる
  return [];
}`
);

fs.writeFileSync(file, content, 'utf-8');
