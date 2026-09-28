import re

with open("src/app/seminar/cashflow-game/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Update Metadata
content = re.sub(
    r"title: 'キャッシュフローゲーム会｜遊びながらお金の知識を学ぶ体験会（川崎・新宿）',",
    "title: 'キャッシュフローゲーム会｜川崎・新宿で開催・参加費1,000円',",
    content
)
content = re.sub(
    r"description: '世界中で愛される「キャッシュフローゲーム」で、ラットレースから抜け出すための第一歩を踏み出しましょう。遊びながらお金の知識を身につける体験会です。',",
    "description: 'ボードゲームで遊びながらお金の流れと投資の基本を学ぶ2時間の体験会。川崎駅前・新宿駅前で開催、参加費1,000円。日程とお申し込みはこちら。',",
    content
)

# Add toJstIso
to_jst_iso = """
function toJstIso(dateStr: string, timeStr: string, offsetHours = 0) {
  const dateMatch = dateStr?.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/);
  let ymd = '2026-01-01';
  if (dateMatch) {
    ymd = `${dateMatch[1]}-${dateMatch[2].padStart(2, '0')}-${dateMatch[3].padStart(2, '0')}`;
  } else {
    const match = dateStr?.match(/^\\d{4}-\\d{2}-\\d{2}/);
    if (match) ymd = match[0];
  }

  let startHour = 19;
  let startMinute = 0;
  if (timeStr) {
    const timeParts = timeStr.split('〜');
    if (timeParts[0]) {
      const cleanStart = timeParts[0].trim().replace(':', '');
      if (cleanStart.length >= 3) {
        startHour = parseInt(cleanStart.slice(0, cleanStart.length - 2), 10) || 10;
        startMinute = parseInt(cleanStart.slice(-2), 10) || 0;
      }
    }
  }

  const h = startHour + offsetHours;
  const mm = startMinute.toString().padStart(2, '0');
  const hh = h.toString().padStart(2, '0');
  return `${ymd}T${hh}:${mm}:00+09:00`;
}
"""

content = content.replace("export const revalidate = 3600;", "export const revalidate = 3600;\n" + to_jst_iso)

# Fix generateEventSchema
event_schema_replace = """    let startDateStr = '';
    let endDateStr = '';
    
    // Convert 2026年10月1日 -> 2026-10-01
    let ymd = '2026-01-01';
    const dateMatch = ev.date.match(/(\\d{4})年(\\d{1,2})月(\\d{1,2})日/);
    if (dateMatch) {
      const y = dateMatch[1];
      const m = dateMatch[2].padStart(2, '0');
      const d = dateMatch[3].padStart(2, '0');
      ymd = `${y}-${m}-${d}`;
    } else {
      ymd = ev.date.replace(/\\([^)]+\\)/g, '').trim().replace(/\\./g, '-');
    }

    const timeStr = ev.time || '10:00〜12:00';
    let startHour = 10, startMin = 0, endHour = 12, endMin = 0;
    
    const timeParts = timeStr.split('〜');
    if (timeParts[0]) {
      const cleanStart = timeParts[0].trim().replace(':', '');
      if (cleanStart.length >= 3) {
        startHour = parseInt(cleanStart.slice(0, cleanStart.length - 2), 10) || 10;
        startMin = parseInt(cleanStart.slice(-2), 10) || 0;
      }
    }
    if (timeParts[1]) {
      const cleanEnd = timeParts[1].trim().replace(':', '');
      if (cleanEnd.length >= 3) {
        endHour = parseInt(cleanEnd.slice(0, cleanEnd.length - 2), 10) || 12;
        endMin = parseInt(cleanEnd.slice(-2), 10) || 0;
      }
    } else {
      endHour = startHour + 2; // CFG is about 2 hours
      endMin = startMin;
    }

    const pad = (num: number) => num.toString().padStart(2, '0');
    startDateStr = `${ymd}T${pad(startHour)}:${pad(startMin)}:00+09:00`;
    endDateStr = `${ymd}T${pad(endHour)}:${pad(endMin)}:00+09:00`;"""

event_schema_new = """    const startDateStr = toJstIso(ev.date, ev.time, 0);
    const endDateStr = toJstIso(ev.date, ev.time, 2);"""

content = content.replace(event_schema_replace, event_schema_new)

# Update description in event schema
content = content.replace(
    '"name": "キャッシュフローゲーム会",\n      "startDate"',
    '"name": "キャッシュフローゲーム会",\n      "description": "ボードゲームで遊びながら、お金の流れと投資の基本が身につく2時間の体験会です。",\n      "startDate"'
)

# Update FAQ Schema (keep only 3 questions)
faq_schema_replace = """      {
        "@type": "Question",
        "name": "一人で参加しても浮きませんか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お一人での参加が大半です。ゲームを通じて自然と会話が生まれるため、すぐに打ち解けることができます。"
        }
      },
      {
        "@type": "Question",
        "name": "ネットワークビジネスや怪しい商品の勧誘はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一切ありません。純粋なお金の勉強を目的としており、そういった勧誘目的での参加も固くお断りしております。"
        }
      },
      {
        "@type": "Question",
        "name": "持ち物は何か必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鉛筆（シャーペン）と消しゴム、電卓（スマホアプリ可）をお持ちください。ゲーム盤や用紙はこちらで用意いたします。"
        }
      },
      {
        "@type": "Question",
        "name": "参加費はいつ支払いますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "当日、現金またはPayPayでお支払いをお願いしております。"
        }
      },
      {
        "@type": "Question",
        "name": "遅れての参加は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ゲームの性質上、ルールの説明を行う最初の30分が非常に重要です。そのため、原則として遅刻でのご参加はご遠慮いただいております。"
        }
      },
      {
        "@type": "Question",
        "name": "年齢制限はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "特に制限は設けておりませんが、成人以上（18歳以上）の方を対象とした内容となっております。"
        }
      }"""

faq_schema_new = """      {
        "@type": "Question",
        "name": "ネットワークビジネスや怪しい商品の勧誘はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一切ありません。純粋なお金の勉強を目的としており、そういった勧誘目的での参加も固くお断りしております。"
        }
      },
      {
        "@type": "Question",
        "name": "持ち物は何か必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鉛筆（シャーペン）と消しゴム、電卓（スマホアプリ可）をお持ちください。ゲーム盤や用紙はこちらで用意いたします。"
        }
      }"""

content = content.replace(faq_schema_replace, faq_schema_new)

# Hero Section replace
hero_replace = """      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 0', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            キャッシュフローゲーム会
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            お金の知識を、遊びながら身につける。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            世界中で愛される「キャッシュフローゲーム」で、<br className="sp-hide" />
            ラットレースから抜け出すための第一歩を踏み出しましょう。
          </p>

          

          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '21/9', position: 'relative' }}>"""

hero_new = """      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 0', textAlign: 'left' }}>
        <div className="container">
          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            キャッシュフローゲーム会（川崎・新宿）
          </h1>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8', fontWeight: 'bold' }}>
            ボードゲームで遊びながら、お金の流れと投資の基本が身につく2時間の体験会です。
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', fontWeight: '600', color: 'var(--primary-dark)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🗓</span> 平日夜・土日開催</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📍</span> 川崎駅前／新宿駅前の貸し会議室</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>💴</span> 参加費 1,000円（当日現金）</li>
          </ul>

          <div style={{ marginBottom: '2rem' }}>
            <a href="#schedule" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', borderRadius: '30px' }}>
              日程を見て申し込む
            </a>
          </div>

          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '21/9', position: 'relative' }}>"""

content = content.replace(hero_replace, hero_new)


# Now we need to remove Summary Section, About CFG Section, 学べること Section, 
# and replace 当日の流れ with short version, keep こんな方におすすめ (first 3), 
# remove 米国株セミナーとの違い Section, 講師について,
# Add Guide link.

start_summary = content.find('{/* Summary Section */}')
end_about = content.find('{/* こんな方におすすめ Section */}', start_summary)

if start_summary != -1 and end_about != -1:
    new_sections = """      {/* おすすめ & 当日の流れ */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>こんな方におすすめ</h2>
          </div>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 4rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>投資に興味はあるが、何から始めればいいかわからない方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>いきなり証券口座を開設して自己流で始める前に、まずは投資のルールと基礎的なマインドセットを学ぶことで、大きな失敗を防ぐことができます。</p>
              </div>
            </li>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>『金持ち父さん 貧乏父さん』を読んで感銘を受けた方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>本を読んで理解したつもりでも、実際に行動に移すのは難しいものです。ゲームを通じて著者の教えを実践し、腑に落とすことができます。</p>
              </div>
            </li>
            <li className="glass-card" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.3rem' }}>財務諸表（B/S・P/L）の基礎的な読み方を実践的に学びたい方</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>難しい会計用語を使わずに、お金の出入りと資産・負債の関係を、手を動かしながら視覚的に理解できるようになります。</p>
              </div>
            </li>
          </ul>

          <div style={{ marginBottom: '2rem', textAlign: 'center', width: '100%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', marginBottom: '1rem', color: 'var(--primary-dark)' }}>当日の流れ</h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem' }}>
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
          </div>

        </div>
      </section>
      
"""
    content = content[:start_summary] + new_sections + content[end_about:]


# Remove the rest from こんな方におすすめ to FAQ Section
end_about_section = content.find('{/* こんな方におすすめ Section */}')
faq_section = content.find('{/* FAQ Section */}')

if end_about_section != -1 and faq_section != -1:
    content = content[:end_about_section] + content[faq_section:]

# We need to add the Link to guide page right before Application Form
apply_section = content.find('{/* Application Form Section */}')

guide_link = """      {/* Guide Link */}
      <section style={{ padding: '2rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <a href="/seminar/cashflow-game/guide" className="glass-card" style={{ padding: '2rem', display: 'block', textDecoration: 'none', borderRadius: '16px', border: '2px solid var(--primary-light)', transition: 'transform 0.2s', background: 'var(--bg-warm)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              キャッシュフローゲームの内容・学べること・講師について詳しく見る →
            </h3>
            <p style={{ color: 'var(--text-main)', margin: 0, fontSize: '0.95rem' }}>
              ゲームの仕組みや当日の詳しい流れなどはこちらをご覧ください。
            </p>
          </a>
        </div>
      </section>
      
"""
content = content[:apply_section] + guide_link + content[apply_section:]

# Remove the 東京米国株クラブとは paragraph at the end
start_club = content.find('<section style={{ padding: \'4rem 0\', background: \'white\' }}>\n        <div className="container" style={{ maxWidth: \'800px\' }}>\n          {/* Definition Paragraph */}')
end_club = content.find('</section>\n    </div>', start_club)

if start_club != -1 and end_club != -1:
    content = content[:start_club] + content[end_club:]

with open("src/app/seminar/cashflow-game/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

