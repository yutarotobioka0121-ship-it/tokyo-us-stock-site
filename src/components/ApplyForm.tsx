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
    
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL;
    
    if (!gasUrl) {
      console.error('GAS URL is not configured');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/apply', {
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

  if (status === 'success') {
    return (
      <div className="success-message slide-up" style={{ textAlign: 'center', padding: '3rem 0' }}>
        <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ marginBottom: '1rem' }}>お申し込みを受け付けました</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          ご入力いただいたメールアドレス宛に、詳細を記載したメールをお送りいたします。
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>
          別の内容でお申し込み
        </button>
      </div>
    );
  }

  const selectedSession = sessions.find(s => s.id === selectedSessionId);
  const defaultSelectValue = selectedSession ? selectedSession.id : "";

  return (
    <form onSubmit={handleSubmit} className="apply-form">
      <input type="hidden" name="form-name" value="apply" />
      
      <div className="form-group">
        <label htmlFor="event" className="form-label">参加希望の日程</label>
        <select 
          id="event" 
          name="event" 
          required 
          className="form-select"
          defaultValue={defaultSelectValue}
        >
          <option value="">日程を選択してください</option>
          {sessions.map((session) => {
            const type = Array.isArray(session.type) ? session.type[0] : session.type;
            const isOffline = type !== 'online' && type !== 'オンライン';
            return (
              <option key={session.id} value={session.id}>
                {formatSessionDate(session.date)} {formatSessionTime(session.date)}〜
                {isOffline && session.location ? ` (${session.location})` : ''}
                {isOffline ? ' [対面]' : ' [オンライン]'}
              </option>
            );
          })}
          <option value="other">その他（メッセージ欄に詳細をご記入ください）</option>
        </select>
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
        <textarea id="message" name="message" className="form-textarea" placeholder="この勉強会で学びたいことなどを自由にご記入ください"></textarea>
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
          <>申し込みを確定する <ArrowRight size={18} /></>
        )}
      </button>
      
      <p className="form-helper">
        ※申し込み後、詳細をメールにてお送りいたします。<br />
        ドメイン指定受信などの設定をご確認ください。
      </p>
    </form>
  );
}
