async function testLiveFormSubmissions() {
  const liveUrl = 'https://www.tokyo-us-stock.com';
  const targetEmail = 'yutaro.tobioka0121@gmail.com'; // 管理者宛て＋受信用テストアドレス

  console.log('=== 本番環境フォーム動作・テストメール自動送信テスト開始 ===\n');
  console.log('対象ドメイン:', liveUrl);
  console.log('テスト受信メールアドレス:', targetEmail);

  // 1. 米国株セミナーフォームのテスト送信
  console.log('\n1. 米国株セミナーお申し込みフォーム テスト送信...');
  try {
    const res1 = await fetch(`${liveUrl}/api/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '【テスト】米国株セミナー',
        email: targetEmail,
        event: '【テスト動作確認】米国株投資セミナー [2026年8月10日 14:00〜 対面カフェ]',
        seminarType: '米国株セミナー',
        message: 'システムの申し込み動作確認用テストメールです。',
      }),
    });
    const json1 = await res1.json();
    console.log('  └ ステータス:', res1.status, json1);
  } catch (e) {
    console.error('  ❌ エラー:', e.message || e);
  }

  // 2. NISA初心者セミナーフォームのテスト送信
  console.log('\n2. NISA初心者セミナーお申し込みフォーム テスト送信...');
  try {
    const res2 = await fetch(`${liveUrl}/api/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '【テスト】NISA初心者セミナー',
        email: targetEmail,
        event: 'NISA初心者セミナー [2026年8月15日 19:00〜 オンライン]',
        seminarType: 'NISA初心者セミナー',
        message: 'NISAセミナーの申し込み動作確認用テストメールです。',
      }),
    });
    const json2 = await res2.json();
    console.log('  └ ステータス:', res2.status, json2);
  } catch (e) {
    console.error('  ❌ エラー:', e.message || e);
  }

  // 3. マンツーマン個別相談フォームのテスト送信
  console.log('\n3. マンツーマン個別相談お申し込みフォーム テスト送信...');
  try {
    const res3 = await fetch(`${liveUrl}/api/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '【テスト】個別相談',
        email: targetEmail,
        event: '個別相談希望 (対面カフェ) [ご希望日時: 8月20日 15時]',
        seminarType: 'マンツーマン個別相談',
        message: '個別相談の申し込み動作確認用テストメールです。',
      }),
    });
    const json3 = await res3.json();
    console.log('  └ ステータス:', res3.status, json3);
  } catch (e) {
    console.error('  ❌ エラー:', e.message || e);
  }

  // 4. お問い合わせフォームのテスト送信
  console.log('\n4. お問い合わせフォーム テスト送信...');
  try {
    const res4 = await fetch(`${liveUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '【テスト】お問い合わせ',
        email: targetEmail,
        subject: 'study-group',
        message: 'お問い合わせフォームの送信動作確認用テストメールです。',
      }),
    });
    const json4 = await res4.json();
    console.log('  └ ステータス:', res4.status, json4);
  } catch (e) {
    console.error('  ❌ エラー:', e.message || e);
  }

  console.log('\n=== テスト送信完了 ===');
}

testLiveFormSubmissions();
