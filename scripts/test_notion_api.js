require('dotenv').config({ path: '.env.local' });

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_CUSTOMER_DB_ID || process.env.NOTION_DATABASE_ID;

console.log('NOTION_TOKEN configured:', !!NOTION_TOKEN);
console.log('TARGET_DATABASE_ID:', DATABASE_ID);

async function testNotionApi() {
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
    console.log(`\n[送信テスト] 種別: "${tc.type}" / 氏名: ${tc.name}`);
    const payload = {
      parent: { database_id: DATABASE_ID },
      properties: {
        'お名前': {
          title: [{ text: { content: tc.name } }],
        },
        'メールアドレス': {
          email: tc.email,
        },
        '種別': {
          select: { name: tc.type },
        },
        '希望日程・件名': {
          rich_text: [{ text: { content: tc.subject } }],
        },
        'メッセージ': {
          rich_text: [{ text: { content: tc.message } }],
        },
      },
    };

    try {
      const res = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (res.ok) {
        console.log(`  ✅ Notion登録成功！ Page ID: ${json.id}`);
        console.log(`  └ 登録された「種別」タグ: "${json.properties['種別']?.select?.name}"`);
      } else {
        console.error(`  ❌ Notion APIエラー:`, json.message || json);
      }
    } catch (e) {
      console.error(`  ❌ リクエストエラー:`, e.message || e);
    }
  }
}

testNotionApi();
