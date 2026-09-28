const fs = require('fs');

const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// For 2-2: <title> と H1 の先頭30字以内に「米国株の始め方」と「初心者」を入れる。
content = content.replace(/title: post\.title,/, `title: slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title,`);
content = content.replace(/headline: post\.title,/, `headline: slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title,`);
content = content.replace(/<h1 className="post-title"([^>]*)>([\s\S]*?)\{post\.title\}([\s\S]*?)<\/h1>/, `<h1 className="post-title"$1>$2{slug === 'us-stock-beginners-guide' && !post.title.includes('米国株の始め方') ? '米国株の始め方 完全ガイド（初心者向け）｜' + post.title : post.title}$3</h1>`);

fs.writeFileSync(file, content, 'utf-8');
