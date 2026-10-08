const fs = require('fs');
let file = 'src/components/BeginnerCta.tsx';
let content = fs.readFileSync(file, 'utf-8');

if (!content.includes('Search')) {
  content = content.replace('ArrowRight, BookOpen, Users', 'ArrowRight, BookOpen, Users, Search');
}

if (!content.includes('自分で銘柄を探してみる')) {
  content = content.replace(
    /<\/div>\n    <\/div>/,
    `  <Link href="/blog/us-stock-screening-guide" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)', background: '#f8f9fa', padding: '1rem', borderRadius: '12px', transition: 'all 0.2s ease' }} className="hover:bg-gray-100">
          <Search size={20} color="var(--primary)" />
          <span style={{ fontWeight: 'bold' }}>自分で銘柄を探してみる → 米国株スクリーニングのやり方</span>
          <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--primary)' }} />
        </Link>
      </div>
    </div>`
  );
}

fs.writeFileSync(file, content, 'utf-8');
