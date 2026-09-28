const fs = require('fs');

// 1. About page
let aboutFile = 'src/app/about/page.tsx';
let aboutContent = fs.readFileSync(aboutFile, 'utf-8');
// Remove 年間配当
aboutContent = aboutContent.replace(/<div className="skill-item"><CheckCircle2 color="var\(--primary\)" size=\{20\} \/><span style=\{\{ fontFamily: 'var\(--font-body\)', fontSize: '0.95rem', lineHeight: '1.8' \}\}>年間配当：【要確認：とびー】円<\/span><\/div>\n?/g, '');
// Replace 受講者数
aboutContent = aboutContent.replace(/【要確認：とびー】名/g, '300名以上');
fs.writeFileSync(aboutFile, aboutContent, 'utf-8');

// 2. Seminar pages
const fixSeminarPage = (file) => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace 受講者数
  content = content.replace(/これまで【要確認：とびー】名以上の方にご参加/g, 'これまで300名以上の方にご参加');
  
  // Remove External Links Section (こくちーず・connpass・Peatix)
  // The section looks like:
  /*
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ExternalLink color="var(--primary)" size={20} />
            こくちーず・connpass・Peatix に掲載中の日程
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            以下の外部イベント告知サイトからもお申し込みいただけます。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div className="glass-card" style={{ padding: '1rem', background: 'var(--bg-white)', borderRadius: '8px' }}>
              <Link href="【要確認：とびー】" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '1.05rem', gap: '0.5rem' }}>
                こくちーずプロで日程を見る <ArrowRight size={16} />
              </Link>
            </div>
            ...
          </div>
        </div>
  */
  // I will use regex or just string replacement to remove this whole div.
  // Let's find the start of the section and the end of it.
  const targetRegex = /<div style=\{\{ marginTop: '2rem' \}\}>\s*<h3[^>]*>[\s\S]*?こくちーず・connpass・Peatix に掲載中の日程[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  content = content.replace(targetRegex, '');
  
  fs.writeFileSync(file, content, 'utf-8');
};

fixSeminarPage('src/app/seminar/page.tsx');
fixSeminarPage('src/app/seminar/nisa/page.tsx');
