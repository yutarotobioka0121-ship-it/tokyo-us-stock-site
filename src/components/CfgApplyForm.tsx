'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { CFGEvent } from '@/lib/microcms';

interface CfgApplyFormProps {
  events: CFGEvent[];
  selectedEventId?: string;
}

export default function CfgApplyForm({ events, selectedEventId }: CfgApplyFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const eventVal = String(data.event || '');
    let eventName = `キャッシュフローゲーム会 (${eventVal})`;
    
    if (eventVal === 'other') {
      eventName = 'キャッシュフローゲーム会 (日程調整希望)';
    } else {
      const foundEvent = events.find(ev => ev.id === eventVal);
      if (foundEvent) {
        eventName = `キャッシュフローゲーム会 [${foundEvent.date} ${foundEvent.time}〜 (${foundEvent.location})]`;
      }
    }

    const payload = {
      name: data.name,
      email: data.email,
      event: eventName,
      seminarType: 'キャッシュフローゲーム会',
      message: data.message ? String(data.message) : '',
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
      console.error('CFG submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-message slide-up" style={{ textAlign: 'left', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ marginBottom: '1rem', textAlign: 'left' }}>お申し込みを受け付けました</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
          ご入力いただいたメールアドレス宛に、詳細を記載したメールをお送りいたします。<br />
          当日お会いできるのを楽しみにしています！
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>
          再度申し込む
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="apply-form">
      <input type="hidden" name="form-name" value="cfg-apply" />
      
      <div className="form-group">
        <label className="form-label">参加希望の日程 <span style={{ color: '#ef4444', fontSize: '0.8rem', marginLeft: '4px' }}>必須</span></label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {events && events.length > 0 ? (
            events.map((ev) => {
              const labelText = `${ev.date} ${ev.time}〜 (${ev.location})`;
              const isClosed = ev.status !== 'open';
              return (
                <label
                  key={ev.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.9rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    background: isClosed ? '#f9fafb' : 'white',
                    cursor: isClosed ? 'not-allowed' : 'pointer',
                    transition: 'var(--transition)',
                    fontSize: '0.95rem',
                    color: isClosed ? '#9ca3af' : 'var(--text-main)',
                    lineHeight: '1.5',
                  }}
                >
                  <input
                    type="radio"
                    name="event"
                    value={ev.id}
                    required
                    disabled={isClosed}
                    defaultChecked={ev.id === selectedEventId && !isClosed}
                    style={{
                      width: '18px',
                      height: '18px',
                      marginTop: '2px',
                      accentColor: 'var(--primary)',
                      flexShrink: 0,
                    }}
                  />
                  <span>
                    {labelText}
                    {ev.status === 'full' && <span style={{ marginLeft: '8px', padding: '2px 6px', background: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', borderRadius: '4px' }}>満席</span>}
                    {ev.status === 'closed' && <span style={{ marginLeft: '8px', padding: '2px 6px', background: '#e5e7eb', color: '#4b5563', fontSize: '0.75rem', borderRadius: '4px' }}>受付終了</span>}
                  </span>
                </label>
              );
            })
          ) : null}

          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.9rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              background: 'white',
              cursor: 'pointer',
              transition: 'var(--transition)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: '1.5',
            }}
          >
            <input
              type="radio"
              name="event"
              value="other"
              required
              defaultChecked={!events || events.length === 0}
              style={{
                width: '18px',
                height: '18px',
                      marginTop: '2px',
                accentColor: 'var(--primary)',
                flexShrink: 0,
              }}
            />
            <span>日程調整を希望・その他（メッセージ欄にご希望日時をお書きください）</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name" className="form-label">お名前 <span style={{ color: '#ef4444', fontSize: '0.8rem', marginLeft: '4px' }}>必須</span></label>
        <input type="text" id="name" name="name" required className="form-input" placeholder="例: 山田 太郎" />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">メールアドレス <span style={{ color: '#ef4444', fontSize: '0.8rem', marginLeft: '4px' }}>必須</span></label>
        <input type="email" id="email" name="email" required className="form-input" placeholder="例: yamada@example.com" />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">ご質問・備考 <span style={{ color: '#9ca3af', fontSize: '0.8rem', marginLeft: '4px' }}>任意</span></label>
        <textarea id="message" name="message" className="form-textarea" placeholder="ご不明な点や、ボードゲームの経験（初心者など）があればご記入ください。" rows={4}></textarea>
      </div>

      {status === 'error' && (
        <div className="error-alert" style={{ color: '#ef4444', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          <AlertCircle size={18} />
          通信エラーが発生しました。時間をおいて再度お試しください。
        </div>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <><Loader2 className="animate-spin" size={20} /> 送信中...</>
        ) : (
          <>送信する <ArrowRight size={18} /></>
        )}
      </button>
      
      <p className="form-helper" style={{ textAlign: 'left', width: '100%' }}>
        ※開催場所の詳細については、ご記入いただいたメールアドレスへ直接ご案内をお送りいたします。<br />
        ドメイン指定受信などの設定をご確認ください。
      </p>
    </form>
  );
}
