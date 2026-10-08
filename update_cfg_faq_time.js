const fs = require('fs');
let file = 'src/app/seminar/cashflow-game/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// FAQ array updating in generateFaqSchema
content = content.replace(
  /const faqData = \[[\s\S]*?\];/,
  `const faqData = [
    {
      question: "投資の知識が全くなくても参加できますか？",
      answer: "はい、全く問題ありません。ゲームを通じて投資の基本から学べるように設計されているため、初心者の方でも安心してご参加いただけます。"
    },
    {
      question: "持ち物は何か必要ですか？",
      answer: "筆記用具、電卓（スマホのアプリで可）、消しゴムをお持ちください。"
    },
    {
      question: "ゲームのルールを知らなくても参加できますか？",
      answer: "はい、初めての方でも大丈夫です。最初の約10分で基本のルールを説明し、細かいルールはゲームを進めながらその都度説明します。事前の準備はいりません。"
    }
  ];`
);

// FAQ JSX updating
content = content.replace(
  /<h2.*?よくある質問<\/h2>[\s\S]*?(<div id="apply-form-section">)/,
  `<h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', paddingLeft: '0.8rem', borderLeft: '5px solid var(--primary)' }}>よくある質問</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary)' }}>Q.</span>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.8rem', lineHeight: '1.8', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--text-main)', fontWeight: '800', position: 'absolute', marginLeft: '-1.8rem' }}>A.</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            $1`
);

// Update times in flow
content = content.replace(/ルール説明（約20分）/g, 'ルール説明（約10分）');
content = content.replace(/ゲーム（約1時間20分）/g, 'ゲーム（約1時間30分・ルールは進めながら説明）');

fs.writeFileSync(file, content, 'utf-8');
