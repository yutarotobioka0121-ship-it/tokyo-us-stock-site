import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getSessions } from '@/lib/microcms';
import { formatSessionDate, formatSessionTime } from '@/lib/utils';
import { addCustomerToNotion } from '@/lib/notion';

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

    // Notionへ顧客データを登録
    await addCustomerToNotion({
      name,
      email,
      type: '勉強会申込',
      subject: eventString,
      message: message || '',
    });

    // GASへの転送は廃止

    const isConsultation = typeof sessionId === 'string' && sessionId.includes('個別相談');

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
      subject: isConsultation 
        ? `【受付完了】個別相談のお申し込み・日程調整のご案内 | 東京米国株クラブ`
        : `【受付完了】勉強会お申し込みのご案内 | 東京米国株クラブ`,
      text: isConsultation ? `
${name} 様

東京米国株クラブのマンツーマン個別相談にお申し込みいただき、誠にありがとうございます。
ご入力いただいた内容を受け付けいたしました。

※重要：この時点ではまだ日時・開催は確定しておりません。
ご入力いただいたご希望日時を元に、運営より改めて日程調整・確定のご案内メールをお送りいたします。

■ご送信いただいたお申し込み内容
種別：マンツーマン個別相談
詳細：${eventString}

■事前にいただいたご質問・メッセージ
${message || '（なし）'}

■今後の流れ
1. ご希望日時を確認し、運営より日程確定および詳細（会場またはZoomリンク）の案内メールを送信いたします。
2. 日程調整完了後、個別相談の実施となります。

しばらくお待ちくださいますようお願い申し上げます。

--------------------------------------------------
東京米国株クラブ 運営
公式サイト: https://www.tokyo-us-stock.com
--------------------------------------------------
` : `
${name} 様

東京米国株クラブの勉強会にお申し込みいただき、誠にありがとうございます。
ご入力いただいたお申し込み内容を受け付けいたしました。

追って運営より、詳細なご案内メールをお送りいたします。

■ご送信いただいたお申し込み内容
勉強会：${eventString}
${sessionDetails}

■注意事項
・キャンセルや変更のご連絡は、このメールへの返信にてお知らせください。
・当日は開始5分前を目安にお集まり（または入室）ください。

皆様にお会いできるのを楽しみにしております。
どうぞよろしくお願いいたします。

--------------------------------------------------
東京米国株クラブ 運営
公式サイト: https://www.tokyo-us-stock.com
--------------------------------------------------
`,
    };

    const adminMailOptions = {
      from: `"東京米国株クラブ" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: isConsultation
        ? `【個別相談お申し込み】${name} 様`
        : `【新規申込】${eventString}`,
      text: isConsultation ? `
以下の内容でマンツーマン個別相談への新規お申し込みがありました。

■お客様情報
お名前：${name} 様
メールアドレス：${email}

■お申し込み内容・希望詳細
${eventString}

■詳細・メッセージ
${message || '（記入なし）'}

--------------------------------------------------
※このメールはシステムから自動送信されています。
` : `
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
