import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addCustomerToNotion } from '@/lib/notion';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // 件名のマッピング
    const subjectMap: Record<string, string> = {
      'study-group': 'セミナーについて',
      'consultation': '個別相談の依頼',
      'business': '仕事のご依頼',
      'other': 'その他'
    };
    const displaySubject = subjectMap[subject] || subject;

    // Notionへ顧客データを登録
    await addCustomerToNotion({
      name,
      email,
      type: 'お問い合わせ',
      seminarType: 'お問い合わせ',
      subject: displaySubject,
      message: message || '',
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    // お客様宛ての自動返信メール
    const mailOptions = {
      from: `"東京米国株クラブ" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `【お問い合わせ受付】${displaySubject}`,
      text: `
${name} 様

東京米国株クラブへお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

■お問い合わせ内容
件名：${displaySubject}
メッセージ：
${message}

内容を確認の上、通常2〜3営業日以内にご返信いたします。
今しばらくお待ちくださいませ。

--------------------------------------------------
東京米国株クラブ
公式サイト: https://tokyo-us-stock.com
--------------------------------------------------
`,
    };

    // 管理者（Yutaroさん）宛ての通知メール
    const adminMailOptions = {
      from: `"東京米国株クラブ" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `【ホームページからのお問い合わせ】${displaySubject}`,
      text: `
ホームページから新しいお問い合わせがありました。

■お客様情報
お名前：${name} 様
メールアドレス：${email}

■お問い合わせ内容
件名：${displaySubject}
メッセージ：
${message}

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
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
