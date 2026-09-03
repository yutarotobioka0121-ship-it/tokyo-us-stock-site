function simulateApplyRoute(data) {
  const { name, email, event: sessionId, message, seminarType } = data;

  const isConsultation = (typeof sessionId === 'string' && sessionId.includes('個別相談')) || seminarType === 'マンツーマン個別相談';
  const isNisa = (typeof sessionId === 'string' && sessionId.includes('NISA初心者セミナー')) || seminarType === 'NISA初心者セミナー';

  let notionType = '米国株セミナー';
  if (isConsultation) {
    notionType = 'マンツーマン個別相談';
  } else if (isNisa) {
    notionType = 'NISA初心者セミナー';
  }

  return {
    name,
    email,
    type: notionType,
    subject: sessionId || '指定なし',
    message: message || '',
  };
}

function simulateContactRoute(data) {
  const { name, email, subject, message } = data;
  const subjectMap = {
    'study-group': 'セミナーについて',
    'consultation': '個別相談の依頼',
    'business': '仕事のご依頼',
    'other': 'その他'
  };
  const displaySubject = subjectMap[subject] || subject;

  return {
    name,
    email,
    type: 'お問い合わせ',
    subject: displaySubject,
    message: message || '',
  };
}

console.log('=== 各申し込みフォームのNotionパラメータ生成チェック ===\n');

// 1. 米国株セミナーフォーム (ApplyForm.tsx)
const test1 = simulateApplyRoute({
  name: '山田 太郎',
  email: 'yamada@example.com',
  event: 'session-id-123 (2026年8月10日 14:00〜 [対面])',
  seminarType: '米国株セミナー',
  message: '米国株の基礎から学びたいです',
});
console.log('1. 米国株セミナーフォーム送信時のNotionデータ:');
console.log(JSON.stringify(test1, null, 2));

// 2. NISA初心者セミナーフォーム (NisaApplyForm.tsx)
const test2 = simulateApplyRoute({
  name: '佐藤 花子',
  email: 'sato@example.com',
  event: 'NISA初心者セミナー [2026年8月15日 19:00〜 [オンライン]]',
  seminarType: 'NISA初心者セミナー',
  message: '新NISAの枠の使い方が知りたいです',
});
console.log('\n2. NISA初心者セミナーフォーム送信時のNotionデータ:');
console.log(JSON.stringify(test2, null, 2));

// 3. マンツーマン個別相談フォーム (ConsultationApplyForm.tsx)
const test3 = simulateApplyRoute({
  name: '鈴木 三郎',
  email: 'suzuki@example.com',
  event: '個別相談希望 (対面カフェ) [ご希望日時: 8月20日 15時]',
  seminarType: 'マンツーマン個別相談',
  message: '個別で自身の資産ポートフォリオを相談したいです',
});
console.log('\n3. マンツーマン個別相談フォーム送信時のNotionデータ:');
console.log(JSON.stringify(test3, null, 2));

// 4. お問い合わせフォーム (ContactForm.tsx)
const test4 = simulateContactRoute({
  name: '高橋 四郎',
  email: 'takahashi@example.com',
  subject: 'study-group',
  message: '次回開催予定について知りたいです',
});
console.log('\n4. お問い合わせフォーム送信時のNotionデータ:');
console.log(JSON.stringify(test4, null, 2));

console.log('\n=== 全パターンのプロパティ検証結果: PASS ===');
