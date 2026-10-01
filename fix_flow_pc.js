const fs = require('fs');
const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// replace the old style block
const oldStyleBlock = `<style>{\`
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
          \`}</style>`;

const newStyleBlock = `<style>{\`
            .flow-container {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              align-items: stretch;
              margin-bottom: 4rem;
              width: 100%;
            }
            .flow-arrow {
              color: var(--primary);
              font-weight: 900;
              font-size: 1.8rem;
              text-align: center;
              transform: rotate(90deg);
            }
            .flow-step {
              padding: 1.5rem;
              font-weight: 800;
              color: var(--primary-dark);
              text-align: center;
              font-size: 1.1rem;
              background: white;
              border: 2px solid var(--primary-light);
              border-radius: 12px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            @media (min-width: 768px) {
              .flow-container {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
              }
              .flow-arrow {
                transform: rotate(0deg);
                flex-shrink: 0;
              }
              .flow-step {
                flex: 1;
                padding: 1.5rem 1rem;
              }
            }
          \`}</style>`;

content = content.replace(oldStyleBlock, newStyleBlock);
// Also replace the class names on the divs because I don't need 'glass-card' if I'm doing custom background/border to make it look prominent.
// Actually, I can just replace `className="glass-card flow-step" style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' }}`
// with `className="flow-step"`
content = content.replace(/className="glass-card flow-step" style=\{\{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' \}\}/g, 'className="flow-step"');

fs.writeFileSync(file, content, 'utf-8');
