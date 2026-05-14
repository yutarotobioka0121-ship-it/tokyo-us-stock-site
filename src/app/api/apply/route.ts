import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getSessions } from '@/lib/microcms';
import { formatSessionDate, formatSessionTime } from '@/lib/utils';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, event: sessionId, message } = data;

    // 1. Fetch session details from MicroCMS
    const allSessions = await getSessions();
    const session = allSessions.find(s => s.id === sessionId);

    let eventString = sessionId;
    let isZoom = false;
    let sessionDetails = '';

    if (session) {
      const type = Array.isArray(session.type) ? session.type[0] : session.type;
      isZoom = type === 'online' || type === 'オンライン';
      const dateStr = formatSessionDate(session.date);
      const timeStr = formatSessionTime(session.date);
      eventString = `${dateStr} ${timeStr}〜${isZoom ? ' [オンライン]' : ' [対面]'}`;
      
      if (isZoom) {
        sessionDetails = `
■Zoom参加情報
URL: https://us06web.zoom.us/j/9612252694?pwd=SWp5MGxTUm1SVmhTcjVWVnlqY3BQdz09&omn=84511369538
ミーティングID: 961 225 2694
パスコード: 1234
`;
      } else {
        sessionDetails = `
■開催場所
${session.location || '都内近郊'}
※詳細は追ってご連絡、または当日のご案内をお待ちください。
`;
      }
    }

    // 2. Forward to GAS (for spreadsheet logging)
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL;
    if (gasUrl) {
      const gasParams = new URLSearchParams({
        name,
        email,
        event: eventString,
        message: message || '',
      });
      
      // We don't necessarily need to wait for GAS to respond, 
      // but let's do it to ensure logging.
      try {
        await fetch(`${gasUrl}?${gasParams.toString()}`, {
          method: 'POST',
          mode: 'no-cors',
        });
      } catch (e) {
        console.error('GAS logging error:', e);
      }
    }

    // 3. Send automatic reply email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `"東京米国株クラブ" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `【お申し込み完了】${eventString} 勉強会`,
      text: `
${name} 様

東京米国株クラブの勉強会にお申し込みいただき、誠にありがとうございます。
以下、お申し込み内容と当日の詳細をご案内いたします。

■お申し込み内容
勉強会：${eventString}
${sessionDetails}

■注意事項
・キャンセルや遅刻のご連絡は、このメールへの返信にてお知らせください。
・当日は開始5分前を目安にお集まり（または入室）ください。

皆様にお会いできるのを楽しみにしております。
どうぞよろしくお願いいたします。

--------------------------------------------------
東京米国株クラブ
講師：トビー
公式サイト: https://tokyo-us-stock.com
--------------------------------------------------
`,
    };

    const adminMailOptions = {
      from: `"東京米国株クラブ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `【新規申込】${eventString}`,
      text: `
以下の内容で勉強会への新規お申し込みがありました。

■お申し込み内容
希望日程・形式：${eventString}

■お客様情報
お名前：${name} 様
メールアドレス：${email}

■参加動機・メッセージ
${message || '（記入なし）'}

--------------------------------------------------
※このメールはシステムから自動送信されています。
`,
    };

    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(adminMailOptions);
    } else {
      console.warn('GMAIL_USER or GMAIL_PASS is not set. Email not sent.');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Apply API error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
