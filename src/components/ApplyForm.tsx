'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { StudySession } from '@/lib/microcms';
import { formatSessionDate, formatSessionTime } from '@/lib/utils';

interface ApplyFormProps {
  sessions: StudySession[];
  selectedSessionId?: string;
}

export default function ApplyForm({ sessions, selectedSessionId }: ApplyFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const payload = {
      ...data,
      seminarType: '米国株セミナー',
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
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-message slide-up" style={{ textAlign: 'left', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ marginBottom: '1rem', textAlign: 'left' }}>お申し込みを受け付けました</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
          ご入力いただいたメールアドレス宛に、詳細を記載したメールをお送りいたします。
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>
          別の内容でお申し込み
        </button>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="apply-form">
      <input type="hidden" name="form-name" value="apply" />
      
      <div className="form-group">
        <label className="form-label">参加希望の日程</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {sessions.map((session) => {
            const typeArr = Array.isArray(session.type) ? session.type : [session.type];
            const typeStr = typeArr.join(' ').toLowerCase();
            const isOnline = typeStr.includes('online') || typeStr.includes('オンライン');
            const isOffline = !isOnline;
            const labelText = `${formatSessionDate(session.date)} ${formatSessionTime(session.date)}〜${isOffline && session.location ? ` (${session.location})` : ''}${isOffline ? ' [対面]' : ' [オンライン]'}`;
            return (
              <label
                key={session.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.9rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.95rem',
                  color: 'var(--text-main)',
                  lineHeight: '1.5',
                }}
              >
                <input
                  type="radio"
                  name="event"
                  value={session.id}
                  required
                  defaultChecked={session.id === selectedSessionId}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: 'var(--primary)',
                    flexShrink: 0,
                  }}
                />
                <span>{labelText}</span>
              </label>
            );
          })}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
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
              style={{
                width: '18px',
                height: '18px',
                accentColor: 'var(--primary)',
                flexShrink: 0,
              }}
            />
            <span>その他（メッセージ欄に詳細をご記入ください）</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name" className="form-label">お名前</label>
        <input type="text" id="name" name="name" required className="form-input" placeholder="山田 太郎" />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">メールアドレス</label>
        <input type="email" id="email" name="email" required className="form-input" placeholder="example@mail.com" />
      </div>

      <div className="form-group">
        <label htmlFor="reason" className="form-label">参加動機・期待すること</label>
        <textarea id="message" name="message" className="form-textarea" placeholder="このセミナーで学びたいことなどを自由にご記入ください"></textarea>
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
          <>申し込み <ArrowRight size={18} /></>
        )}
      </button>
      
      <p className="form-helper" style={{ textAlign: 'left', width: '100%' }}>
        ※申し込み後、詳細をメールにてお送りいたします。<br />
        ドメイン指定受信などの設定をご確認ください。
      </p>
    </form>
  );
}
