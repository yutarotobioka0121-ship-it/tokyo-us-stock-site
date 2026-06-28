import { Metadata } from 'next';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 東京米国株クラブ',
  description: '東京米国株クラブのプライバシーポリシー（個人情報保護方針）に関するご案内。当クラブがお預かりするお名前やメールアドレス等の個人情報の取り扱いについて定めています。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <section className="post-header">
        <div className="container">
          <Link href="/" className="btn-link" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> トップへ戻る
          </Link>
          <h1 className="post-title">プライバシーポリシー</h1>
        </div>
      </section>

      <section className="post-content">
        <div className="notion-block">
          <h2 className="notion-h2">1. 個人情報の収集・利用目的</h2>
          <p className="notion-p">
            当サイトでは、お問い合わせや勉強会のお申し込みの際、お名前やメールアドレス等の個人情報を入力いただく場合がございます。収集した個人情報は、ご質問への回答や必要な情報の連絡にのみ利用し、目的以外では利用いたしません。
          </p>
        </div>

        <div className="notion-block">
          <h2 className="notion-h2">2. 個人情報の第三者提供</h2>
          <p className="notion-p">
            法令に基づく場合を除き、ご本人の同意を得ることなく個人情報を第三者に提供することはありません。
          </p>
        </div>

        <div className="notion-block">
          <h2 className="notion-h2">3. 個人情報の開示・訂正・利用停止</h2>
          <p className="notion-p">
            ご本人から個人情報の開示、訂正、利用停止等のご請求があった場合は、適切かつ迅速に対応いたします。
          </p>
        </div>

        <div className="notion-block">
          <h2 className="notion-h2">4. お問い合わせ先</h2>
          <p className="notion-p">
            プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
          </p>
        </div>
      </section>
    </div>
  );
}
