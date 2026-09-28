const fs = require('fs');

const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(/<h1 className="post-title slide-up delay-1">\{post\.title\}<\/h1>/, `<h1 className="post-title slide-up delay-1">{slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title}</h1>`);

fs.writeFileSync(file, content, 'utf-8');
