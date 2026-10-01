const fs = require('fs');

const file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// The HTML parts currently look like this:
// <div className="glass-card flow-step" style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' }}>
// Let's replace them with just <div className="flow-step">
content = content.replace(/<div className="glass-card flow-step" style=\{\{ padding: '1.2rem 1.5rem', fontWeight: 'bold', color: 'var(--primary-dark)', textAlign: 'center' \}\}>/g, '<div className="flow-step">');

// Also update the flex CSS to enforce strictly equal width
content = content.replace(/flex: 1;/g, 'flex: 1 1 0; display: flex; flex-direction: column; justify-content: center;');

fs.writeFileSync(file, content, 'utf-8');
