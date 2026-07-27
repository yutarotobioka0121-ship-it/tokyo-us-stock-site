import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, HelpCircle, Users, Target, BookOpen, Coffee, Zap, UserCheck, ShieldCheck, ArrowLeft } from "lucide-react";
import ConsultationApplyForm from "@/components/ConsultationApplyForm";

export const metadata: Metadata = {
  title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
  description: '東京で開催中の初心者向け1対1個別投資相談のご案内。周りを気にせず自分のペースで質問したい方へ、投資の始め方や学習計画をマンツーマンで丁寧にサポートします。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/seminar/consultation',
  },
  openGraph: {
    title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
    description: '1対1で自分のペースで学べる個別相談枠。初心者目線での進め方相談や不安解消をマンツーマンで丁寧にサポートします。',
    url: 'https://www.tokyo-us-stock.com/seminar/consultation',
    siteName: '東京米国株クラブ',
    images: [
      {
        url: 'https://www.tokyo-us-stock.com/ogp.png',
        width: 1200,
        height: 630,
        alt: '東京米国株クラブ マンツーマン個別相談',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マンツーマン個別相談受付・申し込み日程 | 東京米国株クラブ',
    description: '1対1で自分のペースで学べる個別相談枠。初心者目線での進め方相談や不安解消をマンツーマンで丁寧にサポートします。',
    images: ['https://www.tokyo-us-stock.com/ogp.png'],
  },
};

export const dynamic = 'force-dynamic';

function formatSessionTimeRange(timeStr: string) {
  if (!timeStr) return '';
  
  let startHour = 0;
  let startMinute = 0;

  if (/^\d{2}:\d{2}$/.test(timeStr)) {
    const parts = timeStr.split(':');
    startHour = parseInt(parts[0], 10);
    startMinute = parseInt(parts[1], 10);
  } else {
    try {
      const dateObj = new Date(timeStr);
      if (isNaN(dateObj.getTime())) return timeStr;
      
      const formatted = new Intl.DateTimeFormat('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Tokyo',
      }).format(dateObj);
      const parts = formatted.split(':');
      startHour = parseInt(parts[0], 10);
      startMinute = parseInt(parts[1], 10);
    } catch (e) {
      return timeStr;
    }
  }

  const endHour = (startHour + 1) % 24;
  const pad = (num: number) => num.toString().padStart(2, '0');
  
  return `${pad(startHour)}:${pad(startMinute)}〜${pad(endHour)}:${pad(startMinute)}`;
}

export default function ConsultationPage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: 'マンツーマン個別相談受付',
    description: '1対1でじっくり相談できる個別投資カウンセリング枠。自分に合った投資の始め方や学習計画をサポート。',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: [
      {
        '@type': 'Place',
        name: '東京会場（渋谷・新宿等のカフェ・レンタルスペース）',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '東京都',
          addressCountry: 'JP',
        },
      },
      {
        '@type': 'VirtualLocation',
        url: 'https://www.tokyo-us-stock.com/seminar/consultation',
      },
    ],
    organizer: {
      '@type': 'Organization',
      name: '東京米国株クラブ',
      url: 'https://www.tokyo-us-stock.com',
    },
    offers: {
      '@type': 'Offer',
      price: '3000',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      url: 'https://www.tokyo-us-stock.com/seminar/consultation',
    },
  };

  return (
    <div className="seminar-page" style={{ overflowWrap: 'break-word' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Hero Section */}
      <section className="seminar-hero" style={{ background: 'var(--bg-warm)', padding: '100px 0 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>

          <div style={{ marginBottom: '1rem' }}>
            <span className="featured-tag">マンツーマン対応</span>
          </div>

          <h1 className="post-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', textAlign: 'left', lineHeight: '1.3', marginLeft: '0', marginRight: 'auto', maxWidth: 'none' }}>
            マンツーマン個別相談受付
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.8' }}>
            「他の参加者を気にせず自分のペースでじっくり質問したい」「自分に合った投資の進め方や学習計画をマンツーマンで相談したい」という方のための1対1個別相談枠です。
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'var(--font-body)', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', textAlign: 'left', fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', lineHeight: '1.8' }}>
            オンラインまたはカフェでの対面形式から選択可能。<br className="sp-hide" />
            疑問や不安をその場で解消しながら、第一歩の進め方を一緒に整理します。
          </p>
          <div className="seminar-hero-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', maxWidth: '800px', margin: '2rem auto 0 auto', aspectRatio: '16/9', position: 'relative' }}>
            <Image
              src="/consultation.jpg"
              alt="対面での個別投資相談・カウンセリングの様子"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Details & Features */}
      <section style={{ background: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', display: 'inline-block' }}>【個別相談の特徴・メリット】</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>完全1対1で気兼ねなく質問できる</strong>：他の参加者を気にせず、自分の理解度に合わせたスピードで何でも質問・相談いただけます。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>オーダーメイドの進め方アドバイス</strong>：ご自身の知識レベルや目標に合わせた、無理のない投資の学習ロードマップをご案内します。</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>対面カフェ・オンライン選択自由</strong>：落ち着いたカフェでの対面面談、またはご自宅からのオンライン面談からお好みで選択可能です。</span>
              </li>
            </ul>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.8rem' }}>【ご注意・安心のお約束】</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              ※当クラブの個別相談は、投資の学習進度や第一歩の始め方を相談するための学びの枠です。<strong>個別の銘柄売買指示、特定の金融商品の推奨、ならびに個人の口座画面の確認操作などは一切行いません。</strong>中立で安全な学習サポートをお約束します。
            </p>
          </div>
        </div>
      </section>

      {/* Apply Form Section */}
      <section id="apply-form-section" style={{ background: 'var(--bg-warm)', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="featured-tag">お申し込み</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0' }}>
              個別相談 お申し込みフォーム
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              ご希望のスタイル・日時・必要事項をご入力の上ご送信ください。
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', background: 'white', borderRadius: '24px' }}>
            <ConsultationApplyForm />
          </div>
        </div>
      </section>

    </div>
  );
}
