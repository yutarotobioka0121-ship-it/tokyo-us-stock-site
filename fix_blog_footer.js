const fs = require('fs');
let file = 'src/app/blog/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('import MetricsSeriesFooter')) {
  content = content.replace('import BeginnerCta', 'import BeginnerCta from "@/components/BeginnerCta";\nimport MetricsSeriesFooter from "@/components/MetricsSeriesFooter";\n//');
}

// BeginnerCta logic
const oldLogic = `const isSeries = post.title.includes('企業分析') || post.title.includes('セクター') || post.title.includes('ETF') || post.title.includes('指標');
              if (isSeries) {
                return <BeginnerCta />;
              }`;

const newLogic = `if (slug.startsWith('valuation-metrics-series-')) {
                return <MetricsSeriesFooter currentSlug={slug} />;
              }
              const isSeries = post.title.includes('企業分析') || post.title.includes('セクター') || post.title.includes('ETF');
              if (isSeries) {
                return <BeginnerCta />;
              }`;

content = content.replace(oldLogic, newLogic);

fs.writeFileSync(file, content, 'utf-8');
