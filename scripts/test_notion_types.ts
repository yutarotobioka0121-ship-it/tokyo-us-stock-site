import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { addCustomerToNotion } from '../src/lib/notion';

async function runTests() {
  console.log('=== Notion連携フォーム送信テスト開始 ===\n');

  const testCases = [
    {
      name: 'テスト太郎（米国株セミナー）',
      email: 'test_us_stock@example.com',
      type: '米国株セミナー',
      subject: '2026年8月10日 14:00〜 [対面]',
      message: '米国株勉強会テスト申し込みメッセージ',
    },
    {
      name: 'テスト花子（NISA初心者セミナー）',
      email: 'test_nisa@example.com',
      type: 'NISA初心者セミナー',
      subject: 'NISA初心者セミナー [2026年8月15日 19:00〜 [オンライン]]',
      message: 'NISAセミナーテスト申し込みメッセージ',
    },
    {
      name: 'テスト三郎（マンツーマン個別相談）',
      email: 'test_consultation@example.com',
      type: 'マンツーマン個別相談',
      subject: '個別相談希望 (対面カフェ) [ご希望日時: 8月20日 15時]',
      message: '個別相談テスト申し込みメッセージ',
    },
    {
      name: 'テスト四郎（お問い合わせ）',
      email: 'test_contact@example.com',
      type: 'お問い合わせ',
      subject: 'セミナーについての問い合わせ',
      message: 'お問い合わせテストメッセージ',
    },
  ];

  for (const tc of testCases) {
    console.log(`[テスト実行] 種別: "${tc.type}" / 氏名: ${tc.name}`);
    try {
      const res = await addCustomerToNotion(tc);
      if (res && res.id) {
        console.log(`  ✅ Notion書き込み成功！ Page ID: ${res.id}`);
        console.log(`  └ 保存された「種別」タグ: "${tc.type}"\n`);
      } else {
        console.log(`  ⚠️ レスポンスなし\n`);
      }
    } catch (e: any) {
      console.error(`  ❌ エラー発生:`, e.message || e, '\n');
    }
  }

  console.log('=== 全4区分のテスト完了 ===');
}

runTests();
