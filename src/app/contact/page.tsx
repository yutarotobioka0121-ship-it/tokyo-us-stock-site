import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: 'お問い合わせ | 東京米国株クラブ',
  description: '東京米国株クラブへのお問い合わせページです。米国株勉強会についてのご質問、個別相談やビジネスのご依頼など、お気軽にお問い合わせください。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="form-section">
        <div className="container">
          <div className="form-container glass-card">
            <span className="section-tag">CONTACT</span>
            <h1 className="section-title">お問い合わせ</h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
