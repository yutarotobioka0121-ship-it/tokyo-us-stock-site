import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '米国株の税金の基本（要点まとめ）｜確定申告・NISA・二重課税',
  description: '米国株の税金について要点を絞って解説。20.315%＋米国10%の仕組み、特定口座での確定申告不要ルールなど、初心者が知るべきポイントをまとめました。詳細は完全ガイドへ。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/tax',
  },
};

export default function TaxKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '米国株・米国株式で得た利益にかかる税金は何パーセントですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '米国株・米国株式の売却益（譲渡益）にかかる税率は日本国内で一律「20.315%」です。配当金に関しては、米国現地で10%が引かれた後、残りに対して日本で20.315%が課税されます。',
        },
      },
      {
        '@type': 'Question',
        name: '「特定口座（源泉徴収あり）」を選べば米国株式の確定申告は不要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれるため、米国株式の確定申告は原則として一切不要です。',
        },
      }
    ],
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 投資知識一覧へ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            米国株の税金の基本（要点まとめ）
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          
          <div style={{ marginBottom: '3rem', padding: '1.5rem', background: '#fff5f5', border: '2px solid #e53e3e', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#c53030', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
              📢 より詳しい解説は「完全ガイド」をご覧ください
            </h2>
            <p style={{ margin: '0 0 1rem 0', lineHeight: '1.6' }}>
              本ページは米国株の税金に関する「要点まとめ」です。NISAでの非課税や外国税額控除のやり方など、より詳細な解説や最新の税制については以下の完全ガイドをご覧ください。
            </p>
            <Link href="/blog/us-stock-tax-complete-guide" style={{ display: 'inline-flex', alignItems: 'center', background: '#e53e3e', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
              全体像はこちら → 米国株の税金・確定申告 完全ガイド <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 米国株にかかる税金の基本（20.315%＋米国10%）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            米国株式投資で得られた利益には、日本国内で一律約20.315%の税金がかかります。売却益には米国での税金はかかりませんが、配当金には米国現地での10%課税も発生します。
          </p>
          <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
            <li><strong>売却益：</strong>日本国内で 20.315% が引かれます。米国では引かれません。</li>
            <li><strong>配当金：</strong>米国で 10% 引かれた後、残りに対して日本で 20.315% が引かれます（二重課税）。</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 「特定口座（源泉徴収あり）」なら確定申告は原則不要
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社で口座を開設する際に「特定口座（源泉徴収あり）」を選択しておけば、証券会社が利益から税金を自動的に差し引いて代わりに納税してくれます。そのため、米国株式の確定申告は原則として一切不要となり、会社員の方でも手間がかかりません。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 新NISAを活用すれば日本の税金はゼロ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            新NISA口座で米国株を購入した場合、日本国内の税金（20.315%）は完全に非課税となります。ただし、配当金に対する米国の10%課税はNISAでも引かれる点には注意が必要です。
          </p>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 確定申告をした方がお得なケース
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            特定口座（源泉徴収あり）であっても、以下のケースでは確定申告を行うことで払い過ぎた税金を取り戻すことができます。
          </p>
          <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
            <li><strong>外国税額控除：</strong>配当金にかかった米国の10%課税の一部を取り戻す</li>
            <li><strong>損益通算・繰越控除：</strong>発生した損失を他の利益と相殺したり、翌年以降に繰り越す</li>
          </ul>

          <div style={{ margin: '3rem 0', padding: '2rem', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e9ecef', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
              詳細な解説・手続き方法は「完全ガイド」へ
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              実際の計算シミュレーションや、外国税額控除のやり方など、より実践的な内容については完全ガイド記事をご覧ください。
            </p>
            <Link href="/blog/us-stock-tax-complete-guide" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: '999px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
              米国株の税金・確定申告 完全ガイドを読む <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
