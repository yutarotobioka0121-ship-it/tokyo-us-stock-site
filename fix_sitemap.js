const fs = require('fs');
let content = fs.readFileSync('src/app/sitemap.ts', 'utf-8');

// Add revalidate
if (!content.includes('export const revalidate = 3600;')) {
  content = content.replace('export default async function sitemap()', 'export const revalidate = 3600;\n\nexport default async function sitemap()');
}

// Replace us-stock-tax-guide with us-stock-tax-complete-guide
content = content.replace("'/blog/us-stock-tax-guide',", "'/blog/us-stock-tax-complete-guide',");

fs.writeFileSync('src/app/sitemap.ts', content, 'utf-8');
