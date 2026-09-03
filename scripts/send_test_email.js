require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env.production' });
const nodemailer = require('nodemailer');

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || GMAIL_USER || 'yutaro.tobioka0121@gmail.com';

console.log('=== テストメール送信チェック ===');
console.log('GMAIL_USER:', GMAIL_USER ? GMAIL_USER : '❌ 未設定');
console.log('GMAIL_PASS:', GMAIL_PASS ? '***** (設定済み)' : '❌ 未設定');
console.log('送信先 (ADMIN_EMAIL):', ADMIN_EMAIL);

if (!GMAIL_USER || !GMAIL_PASS) {
  console.log('\n⚠️ GMAIL_USER または GMAIL_PASS が .env.local に設定されていないためローカルから直接送信できません。');
  console.log('本番環境(Vercel)の環境変数設定状況を確認するか、APIエンドポイント経由での送信テストを実行します。');
  process.exit(0);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

async function sendTestEmails() {
  try {
    console.log('\n[テスト1] 米国株セミナーお申し込み通知メール送信...');
    await transporter.sendMail({
      from: `"東京米国株クラブ" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: '【テスト通知】米国株セミナーお申し込み動作確認',
      text: `
※このメールはシステムの自動テストメールです。

■お申し込み種別：米国株セミナー
■お名前：テスト太郎 様
■メールアドレス：${ADMIN_EMAIL}
■希望日程：2026年8月10日 14:00〜 [対面]
■メッセージ：米国株勉強会の申し込みテストです。

--------------------------------------------------
東京米国株クラブ システム
`,
    });
    console.log('  ✅ 米国株セミナー テストメール送信完了！');

    console.log('\n[テスト2] NISA初心者セミナーお申し込み通知メール送信...');
    await transporter.sendMail({
      from: `"東京米国株クラブ" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: '【テスト通知】NISA初心者セミナーお申し込み動作確認',
      text: `
※このメールはシステムの自動テストメールです。

■お申し込み種別：NISA初心者セミナー
■お名前：テスト花子 様
■メールアドレス：${ADMIN_EMAIL}
■希望日程：NISA初心者セミナー [2026年8月15日 19:00〜 [オンライン]]
■メッセージ：NISAセミナーの申し込みテストです。

--------------------------------------------------
東京米国株クラブ システム
`,
    });
    console.log('  ✅ NISA初心者セミナー テストメール送信完了！');

    console.log('\n[テスト3] マンツーマン個別相談お申し込み通知メール送信...');
    await transporter.sendMail({
      from: `"東京米国株クラブ" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: '【テスト通知】マンツーマン個別相談お申し込み動作確認',
      text: `
※このメールはシステムの自動テストメールです。

■お申し込み種別：マンツーマン個別相談
■お名前：テスト三郎 様
■メールアドレス：${ADMIN_EMAIL}
■希望スタイル：対面カフェ相談
■希望日時：8月20日 15時
■メッセージ：個別相談の申し込みテストです。

--------------------------------------------------
東京米国株クラブ システム
`,
    });
    console.log('  ✅ マンツーマン個別相談 テストメール送信完了！');

    console.log('\n全テストメールの送信が成功しました！');
  } catch (error) {
    console.error('❌ メール送信中にエラーが発生しました:', error);
  }
}

sendTestEmails();
