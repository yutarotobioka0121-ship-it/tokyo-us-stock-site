const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

const targetStr = `          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center', flex: '1 1 auto', minWidth: '200px' }}>
              1. ルール説明（約20分）
            </div>
            <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>→</div>
            <div className="glass-card" style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center', flex: '1 1 auto', minWidth: '200px' }}>
              2. ゲーム（約1時間20分）
            </div>
            <div style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>→</div>
            <div className="glass-card" style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center', flex: '1 1 auto', minWidth: '200px' }}>
              3. 振り返り（約20分）
            </div>
          </div>`;

const newStr = `          <style>{\`
            .flow-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: center;
              margin-bottom: 4rem;
            }
            .flow-arrow {
              color: var(--primary-light);
              font-weight: bold;
              font-size: 1.5rem;
              transform: rotate(90deg);
            }
            .flow-step {
              width: 100%;
              max-width: 300px;
            }
            @media (min-width: 768px) {
              .flow-container {
                flex-direction: row;
                justify-content: center;
              }
              .flow-arrow {
                transform: rotate(0deg);
              }
            }
          \`}</style>
          <div className="flow-container">
            <div className="glass-card flow-step" style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' }}>
              1. ルール説明（約20分）
            </div>
            <div className="flow-arrow">→</div>
            <div className="glass-card flow-step" style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' }}>
              2. ゲーム（約1時間20分）
            </div>
            <div className="flow-arrow">→</div>
            <div className="glass-card flow-step" style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' }}>
              3. 振り返り（約20分）
            </div>
          </div>`;

if(content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync(file, content, 'utf-8');
    console.log("Replaced successfully!");
} else {
    console.log("Could not find the target string.");
}
