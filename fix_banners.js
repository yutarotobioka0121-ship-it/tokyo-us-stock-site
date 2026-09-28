const fs = require('fs');

const files = [
  'src/app/blog/us-stock-tokutei-koza-guide/page.tsx',
  'src/app/blog/us-stock-kakutei-shinkoku/page.tsx',
  'src/app/blog/us-stock-gaikoku-zei-kojo/page.tsx'
];

const banner = `
        <div style={{ background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            💡 全体像はこちら → <Link href="/blog/us-stock-tax-complete-guide" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>米国株の税金・確定申告 完全ガイド</Link>
          </p>
        </div>
`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('全体像はこちら')) {
    content = content.replace('<div className="article-body-content">', '<div className="article-body-content">' + banner);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
