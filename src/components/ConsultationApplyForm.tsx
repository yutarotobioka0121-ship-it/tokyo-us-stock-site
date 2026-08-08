'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

export default function ConsultationApplyForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // イベント名を「個別相談」として送信
    const payload = {
      name: data.name,
      email: data.email,
      event: `個別相談希望 (${data.consultationStyle || '形式未指定'}) [ご希望日時: ${data.preferredDate || '指定なし'}]`,
      seminarType: 'マンツーマン個別相談',
      message: `【希望スタイル】${data.consultationStyle || '未選択'}\n【希望日時】${data.preferredDate || '指定なし'}\n\n【相談したい内容・メッセージ】\n${data.message || '特になし'}`,
    };

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Consultation submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-message slide-up" style={{ textAlign: 'left', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ marginBottom: '1rem', textAlign: 'left' }}>お申し込みを受け付けました</h2>
        <p style={{ color: 'var(--text-main)', textAlign: 'left', lineHeight: '1.8', fontWeight: '700', marginBottom: '0.5rem' }}>
          ※現時点ではまだ日時は確定しておりません。
        </p>
        <p style={{ color: 'var(--text-muted)', textAlign: 'left', lineHeight: '1.8' }}>
          ご入力いただいた希望日時を元に、運営より改めて日程確定・調整に関する案内メール（自動受付確認メール）をお送りいたしました。<br />
          折り返しの連絡をお待ちくださいますようお願い申し上げます。
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>
          別の内容でお申し込み
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="apply-form">
      {/* 1. 相談スタイルの選択 */}
      <div className="form-group" style={{ marginBottom: '1.8rem' }}>
        <label className="form-label" style={{ fontWeight: '800', marginBottom: '0.8rem', display: 'block' }}>希望の相談スタイル</label>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', background: 'var(--bg-warm)', padding: '0.75rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <input type="radio" name="consultationStyle" value="対面相談（都内カフェ等）" defaultChecked />
            対面相談（都内カフェ・レンタルスペース）
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', background: 'var(--bg-warm)', padding: '0.75rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <input type="radio" name="consultationStyle" value="オンライン相談（Zoom）" />
            オンライン相談（Zoom）
          </label>
        </div>
      </div>

      {/* 2. 希望日時の入力 */}
      <div className="form-group" style={{ marginBottom: '1.8rem' }}>
        <label className="form-label" htmlFor="preferredDate" style={{ fontWeight: '800', marginBottom: '0.4rem', display: 'block' }}>
          ご希望の日時・時間帯 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '0.5rem' }}>（時間：1回 30分）</span>
        </label>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
          例：8月1日(土) 14:00以降、平日19時以降 など（候補をいくつか挙げていただけますとスムーズです）
        </p>
        <input
          type="text"
          id="preferredDate"
          name="preferredDate"
          required
          className="form-input"
          placeholder="例：第一希望 8/1(土) 14:00〜、第二希望 平日19:00以降"
          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem' }}
        />
      </div>

      {/* 3. お名前 */}
      <div className="form-group" style={{ marginBottom: '1.8rem' }}>
        <label className="form-label" htmlFor="name" style={{ fontWeight: '800', marginBottom: '0.4rem', display: 'block' }}>
          お名前 <span style={{ color: 'var(--primary)', fontSize: '0.85rem', marginLeft: '0.2rem' }}>*必須</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
          placeholder="山田 太郎"
          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem' }}
        />
      </div>

      {/* 4. メールアドレス */}
      <div className="form-group" style={{ marginBottom: '1.8rem' }}>
        <label className="form-label" htmlFor="email" style={{ fontWeight: '800', marginBottom: '0.4rem', display: 'block' }}>
          メールアドレス <span style={{ color: 'var(--primary)', fontSize: '0.85rem', marginLeft: '0.2rem' }}>*必須</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
          placeholder="example@email.com"
          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem' }}
        />
      </div>

      {/* 5. 事前に相談したい内容・メッセージ */}
      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <label className="form-label" htmlFor="message" style={{ fontWeight: '800', marginBottom: '0.4rem', display: 'block' }}>
          事前に相談したい内容・ご質問 <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 'normal' }}>（任意）</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-input"
          placeholder="事前に伝えておきたい疑問や、相談したいテーマがあればご自由にご記入ください。"
          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <div className="error-message" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1.5rem', padding: '0.8rem', background: '#fef2f2', borderRadius: '12px', fontSize: '0.9rem' }}>
          <AlertCircle size={18} />
          <span>送信に失敗しました。時間をおいて再度お試しください。</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary btn-block"
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.05rem',
          fontWeight: '800',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer'
        }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>送信中...</span>
          </>
        ) : (
          <>
            <span>個別相談を申し込む</span>
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </form>
  );
}
