const fs = require('fs');

const file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes("import BeginnerCta")) {
  content = content.replace("import RelatedPosts from '@/components/RelatedPosts';", "import RelatedPosts from '@/components/RelatedPosts';\nimport BeginnerCta from '@/components/BeginnerCta';");
}

const injection = `
            {/* Beginner CTA for series posts (2-2) */}
            {(() => {
              const isSeries = post.title.includes('企業分析') || post.title.includes('セクター') || post.title.includes('ETF') || post.title.includes('指標');
              if (isSeries) {
                return <BeginnerCta />;
              }
              return null;
            })()}
`;

// Insert it right before the knowledge banner (where the old CTA was inserted, I can insert it right after the markdown content render)
content = content.replace('{/* 知識ページ案内バナー */}', injection + '\n            {/* 知識ページ案内バナー */}');

fs.writeFileSync(file, content, 'utf-8');
