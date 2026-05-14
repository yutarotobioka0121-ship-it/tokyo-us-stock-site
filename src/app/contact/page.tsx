'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="form-section">
        <div className="container">
          <div className="form-container glass-card">
            <span className="section-tag">CONTACT</span>
            <h1 className="section-title">お問い合わせ</h1>
            
            {status === 'success' ? (
              <div className="success-message slide-up" style={{ textAlign: 'center', padding: '3rem 0' }}>
                <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                <h2 style={{ marginBottom: '1rem' }}>送信が完了しました</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  お問い合わせいただきありがとうございます。内容を確認の上、通常2〜3営業日以内にご返信いたします。
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  別の内容で送る
                </button>
              </div>
            ) : (
              <>
                <p className="about-desc">
                  ご質問、お仕事のご依頼、その他何かございましたら、以下のフォームよりお気軽にお問い合わせください。
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">お名前</label>
                    <input type="text" id="name" name="name" required className="form-input" placeholder="山田 太郎" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">メールアドレス</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="example@mail.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">件名</label>
                    <select id="subject" name="subject" className="form-select">
                      <option value="study-group">勉強会について</option>
                      <option value="consultation">個別相談の依頼</option>
                      <option value="business">仕事のご依頼</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">メッセージ内容</label>
                    <textarea id="message" name="message" required className="form-textarea" placeholder="メッセージを入力してください"></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="error-alert" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                      <AlertCircle size={18} />
                      送信中にエラーが発生しました。時間をおいて再度お試しください。
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <><Loader2 className="animate-spin" size={20} /> 送信中...</>
                    ) : (
                      '送信する'
                    )}
                  </button>
                  
                  <p className="form-helper">
                    ※通常2〜3営業日以内にご返信いたします。
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
