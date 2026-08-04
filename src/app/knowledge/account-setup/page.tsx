import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Smartphone, FileCheck, CheckCircle2, DollarSign, HelpCircle, UserCheck, AlertTriangle, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: '証券口座の作り方・開設手順を完全解説！必要書類・スマホ撮影（eKYC）・初期設定まで | 東京米国株クラブ',
  description: '初心者向けにネット証券口座の作り方を徹底解説。事前に用意する書類（マイナンバーカード）、スマホでの申し込み4ステップ、特定口座（源泉あり）や配当受取方式の正しい選び方、SBI・楽天証券比較まで網羅。',
  alternates: {
    canonical: 'https://www.tokyo-us-stock.com/knowledge/account-setup',
  },
};

export default function AccountSetupKnowledgePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '証券口座の開設や口座維持に費用・手数料はかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、SBI証券や楽天証券などの大手ネット証券では、口座開設手数料も毎月の口座管理料・維持費用も完全無料です。株や投資信託を実際に売買しない限り、1円も費用は発生しません。',
        },
      },
      {
        '@type': 'Question',
        name: '証券口座を作ると、勤務先の会社に電話（在籍確認）や通知がいきますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、証券口座の開設で勤務先に電話や通知が行くことは一切ありません。また、口座開設時に「特定口座（源泉徴収あり）」を選択しておけば、利益に対する税金が自動天引きされて確定申告が不要になるため、給与の住民税通知を通じて会社に知られる心配もありません。',
        },
      },
      {
        '@type': 'Question',
        name: '口座開設の審査に落ちてしまう主な原因は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '主な原因は「入力した氏名・住所と本人確認書類（マイナンバーカード等）の記載内容の不一致（引越し後の住所未変更など）」や「本人確認写真のぼやけ・反射」です。記載内容が完全に一致していれば、主婦・学生・無職の方であっても審査に通ります。',
        },
      },
      {
        '@type': 'Question',
        name: '複数の証券会社で口座を作っても大丈夫ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、通常の証券口座（特定口座や一般口座）は複数の証券会社で何個でも作ることができます。ただし、税金が非課税になる「NISA口座」だけは全証券会社を通じて日本国内で1人1口座しか作れません。',
        },
      },
      {
        '@type': 'Question',
        name: '申し込みから口座が開設されて取引できるようになるまで何日かかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'スマートフォンによる本人確認（eKYC）を利用した場合、最短で「即日〜翌営業日」に口座開設が完了しログイン可能になります。郵送で本人確認を行う場合は1週間〜10日程度かかりますので、スマホ撮影での申し込みがおすすめです。',
        },
      },
    ],
  };

  return (
    <div className="knowledge-page" style={{ overflowWrap: 'break-word' }}>
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Section */}
      <section className="post-header" style={{ background: 'var(--bg-warm)', padding: '100px 0 2.5rem 0', textAlign: 'left' }}>
        <div className="container">
          <Link href="/knowledge/stock-investment" className="btn-link" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: 'var(--font-body)', fontWeight: '700', textDecoration: 'none' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> 株式投資とはへ戻る
          </Link>
          <h1 className="post-title" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', fontWeight: '900', textAlign: 'left', marginLeft: '0', marginRight: 'auto', maxWidth: 'none', marginBottom: '0.5rem', color: 'var(--primary-dark)', lineHeight: '1.3' }}>
            証券口座の作り方完全ガイド！申し込み手順・必要書類・初期設定を解説
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

          {/* プロローグ */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              「株式投資やNISAを始めたいけれど、証券口座の作り方が分からない」「どんな書類を用意すればいいの？」「難しそうな設定で失敗したくない」と感じていませんか？
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              現代のネット証券の口座開設は非常に進化しており、**スマホ1台あれば印鑑不要・郵送不要で最短即日〜翌日に完了**します。口座の作成手数料や維持費用も完全無料です。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: 0 }}>
              本ページでは、初心者の方が絶対に迷わないよう、事前の必要書類、申し込み4ステップ、失敗しない初期設定の選び方（特定口座・配当受取方式）、そしてログイン後の入金・購入方法まで丁寧に解説します。
            </p>
          </div>

          {/* 1章: 証券口座開設の事前準備 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            1. 証券口座を作るための事前準備（必要書類3点）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            口座開設の申し込みをスムーズに進めるため、お手元に以下の3点を用意しましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ① マイナンバー確認書類 ＋ 本人確認書類
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                **「マイナンバーカード」**が1枚あれば、表・裏の撮影だけで完了するため最もおすすめです。<br />
                ※マイナンバーカードがない場合は「マイナンバー通知カード（またはマイナンバー付き住民票）」＋「運転免許証（またはパスポート）」の2点を用意します。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ② 入出金用の金融機関口座（本人名義の銀行口座）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                証券口座へお金を入金したり、利益を自分の銀行口座へ戻すための銀行口座番号（店番号・口座番号）を用意します。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ③ メールアドレス ＋ カメラ付きスマートフォン
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                オンラインでの本人確認撮影（eKYC）と、審査完了通知のメール受信用に使用します。
              </p>
            </div>
          </div>

          {/* 2章: 口座開設の4ステップ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            2. 証券口座を作る4つのステップ（スマホで完結）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            実際の申し込みは、スマホの画面指示に従って5分程度で完了します。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 1：公式サイトからメールアドレスの登録
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                SBI証券や楽天証券の公式サイトの「口座開設はこちら」ボタンを押し、メールアドレスを入力します。届いた認証コードを画面に入力して次へ進みます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 2：お客様基本情報の入力
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                氏名、住所、生年月日、電話番号、職業、インサイダー登録確認などを正確に入力します。※本人確認書類と住所表記が完全一致しているか確認してください。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 3：重要初期設定の選択（口座区分・NISAの選択）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                口座種別を選択します。ここでは迷わず**「特定口座（源泉徴収あり）」**と**「NISA口座の申し込む」**を選択します。（詳細は3章で解説）
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '16px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                STEP 4：スマホで本人確認書類と顔写真の撮影（eKYC）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                画面の案内に沿って、マイナンバーカードの厚み・裏表と、ご自身の顔の正面・首振り動画をスマホカメラで撮影します。これで申し込み完了です！
              </p>
            </div>
          </div>

          {/* 3章: 開設時に迷う「3大初期設定」の正解 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            3. 申し込み画面で迷う「3大初期設定」の正しい選び方
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            初心者が最も不安を感じるのが「専門用語の選択肢」です。以下の通りの設定を選んでおけば間違いありません。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                設定①：口座区分は「特定口座（源泉徴収あり）」を選ぶ！
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                「一般口座」「特定口座（源泉あり）」「特定口座（源泉なし）」の選択肢が出たら、迷わず**「特定口座（源泉徴収あり）」**を選んでください。<br />
                証券会社が税金を自動計算して代わりに納税してくれるため、面倒な確定申告が一切不要になり、勤務先に株式投資が知られることもありません。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                設定②：配当受取方式は「株式数比例配分方式」を選ぶ！
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                配当金の受け取り方法は**「株式数比例配分方式（証券口座受取）」**を選びます。銀行受取などを選んでしまうと、NISA口座で株を買っていても配当金に20.315%の税金がかかってしまうため、非常に重要な設定です。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                設定③：NISA口座は「開設する」を選択！
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                証券口座と同時にNISA口座の申し込みをチェックします。他社でNISAを開設したことがなければ、そのまま税務署審査へ回り、スムーズに非課税口座が完成します。
              </p>
            </div>
          </div>

          {/* 4章: 初心者におすすめの2大ネット証券比較 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            4. 初心者におすすめの大手ネット証券比較（SBI証券 vs 楽天証券）
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            証券会社は、国内シェア上位の**「SBI証券」**か**「楽天証券」**を選べば失敗しません。どちらも口座開設費用・維持費用は無料です。
          </p>

          {/* 比較表 */}
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-warm)', borderBottom: '2px solid rgba(0,0,0,0.08)' }}>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800' }}>比較項目</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary)' }}>SBI証券</th>
                  <th style={{ padding: '0.8rem 1rem', fontWeight: '800', color: 'var(--primary-dark)' }}>楽天証券</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>開設スピード</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>最短即日〜翌日</td>
                  <td style={{ padding: '0.8rem 1rem' }}>最短翌日〜2営業日</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>クレカ積立ポイント</td>
                  <td style={{ padding: '0.8rem 1rem' }}>三井住友カード（Vポイント）</td>
                  <td style={{ padding: '0.8rem 1rem' }}>楽天カード（楽天ポイント）</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>操作画面・アプリ</td>
                  <td style={{ padding: '0.8rem 1rem' }}>高機能・情報量豊富</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary-dark)' }}>初心者向け・非常に画面が見やすい</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700' }}>総合おすすめ</td>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: '700', color: 'var(--primary)' }}>口座数No.1・米国株に最も強い</td>
                  <td style={{ padding: '0.8rem 1rem' }}>楽天経済圏ユーザー・画面の扱いやすさ抜群</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5章: 完了後のログイン・入金・初回購入 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            5. 口座開設完了後の初期設定・入金・最初の購入手順
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            審査が完了してログイン情報（ID・パスワード）が届いた後の手順です。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                手順①：サイトへ初回ログイン ＆ 取引パスワード設定
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                メールまたは郵送で届いた初期ID・パスワードでマイページへログインし、本パスワードと「取引パスワード（注文用）」を設定します。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                手順②：資金の入金（リアルタイム即時入金 制度の活用）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                ネットバンキングをお持ちであれば「即時入金」機能を使うことで、振込手数料無料・リアルタイムで証券口座へお金が反映されます。また、クレジットカード積立の場合は銀行入金すら不要で自動引き落としされます。
              </p>
            </div>
            <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.3rem' }}>
                手順③：銘柄検索と最初の購入（100円積立・1株購入）
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                検索窓に「S&P500」や「オルカン」と入力し、「積立設定」から月1,000円〜数万円の自動積立を設定すれば完了です。
              </p>
            </div>
          </div>

          {/* 6章: eKYC撮影のコツと銀行自動連携の裏ワザ */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            6. 一発で審査に通るスマホ撮影のコツ ＆ 銀行連携の裏ワザ
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            申し込みで躓きやすいポイントと、口座開設後に必ずやるべきお得な設定です。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                📷 スマホ撮影（eKYC）で一発合格する3つのコツ
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                再撮影や審査遅延の9割は写真の不備です。「部屋を明るくして蛍光灯の反射を防ぐ」「厚み撮影は斜め45度で文字が隠れないように持ち手を変える」「顔撮影はフレームに収めて指定の方向にゆっくり首を傾ける」の3点を意識しましょう。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', background: 'white' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                🏦 証券口座 ✕ ネット銀行連携で優遇金利をゲット！
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                SBI証券なら「住信SBIネット銀行（SBIハイブリッド預金）」、楽天証券なら「楽天銀行（マネーブリッジ）」と無料連携設定を行うのが必須テクニックです。<br />
                銀行口座の普通預金金利が通常の数倍（年0.1%以上）に優遇され、証券口座での買い付け時に銀行口座から自動で資金がスイープ（即時振り替え）されるため利便性が劇的に向上します。
              </p>
            </div>
          </div>

          {/* 7章: 安全な資産運用のためのセキュリティ初期設定 */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            7. 口座を作ったら必ず設定すべきセキュリティ対策
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            大切な資産を守るため、口座開設完了後には以下のセキュリティ設定を行いましょう。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・「二段階認証（2要素認証）」の有効化
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                IDとパスワードの入力に加えて、スマホアプリやSMSに届くワンタイムパスワードを必須にする設定です。第三者による不正アクセスや不正出金を確実に防ぐことができます。
              </p>
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'var(--bg-warm)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                ・「ログインパスワード」と「取引暗証番号」の区別
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', margin: 0, lineHeight: '1.7' }}>
                マイページへログインするためのパスワードと、実際に株の注文や出金を行うための数字4桁などの取引暗証番号は、必ず異なる文字列を設定し、安全に管理しましょう。
              </p>
            </div>
          </div>

          {/* 8章: 配偶者・お子様（未成年口座）の口座開設について */}
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)', fontWeight: '900', color: 'var(--primary-dark)', borderBottom: '2px solid var(--bg-warm)', paddingBottom: '0.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
            8. ご家族（配偶者・お子様）の口座開設のポイント
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            配偶者やお子様の口座を開設することで、非課税枠（NISA）を世帯全体で最大化することが可能です。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '2.5rem' }}>
            18歳未満のお子様名義で口座を作る場合は**「未成年口座（未成年口座の開設手続き）」**を利用します。親権者（親）が親口座を SBI証券や楽天証券に持っていることが条件となります。未成年口座で準備した資金は、将来の大学進学費用や成人に向けた贈与資産として長期インデックス運用で活用するご家庭が急増しています。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 証券口座の開設や口座維持に費用・手数料はかかりますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、SBI証券や楽天証券などの大手ネット証券では、口座開設手数料も毎月の口座管理料・維持費用も完全無料です。株や投資信託を実際に売買しない限り、1円も費用は発生しません。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 証券口座を作ると、勤務先の会社に電話（在籍確認）や通知がいきますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. いいえ、証券口座の開設で勤務先に電話や通知が行くことは一切ありません。また、口座開設時に「特定口座（源泉徴収あり）」を選択しておけば、利益に対する税金が自動天引きされて確定申告が不要になるため、給与の住民税通知を通じて会社に知られる心配もありません。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 口座開設の審査に落ちてしまう主な原因は何ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. 主な原因は「入力した氏名・住所と本人確認書類（マイナンバーカード等）の記載内容の不一致（引越し後の住所未変更など）」や「本人確認写真のぼやけ・反射」です。記載内容が完全に一致していれば、主婦・学生・無職の方であっても審査に通ります。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 複数の証券会社で口座を作っても大丈夫ですか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. はい、通常の証券口座（特定口座や一般口座）は複数の証券会社で何個でも作ることができます。ただし、税金が非課税になる「NISA口座」だけは全証券会社を通じて日本国内で1人1口座しか作れません。
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                Q. 申し込みから口座が開設されて取引できるようになるまで何日かかりますか？
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', margin: 0 }}>
                A. スマートフォンによる本人確認（eKYC）を利用した場合、最短で「即日〜翌営業日」に口座開設が完了しログイン可能になります。郵送で本人確認を行う場合は1週間〜10日程度かかりますので、スマホ撮影での申し込みがおすすめです。また、NISA口座の税務署審査には別途1〜2週間程度かかりますが、その間も課税口座やNISA仮開設状態で取引を開始することができます。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--bg-warm)', color: 'var(--text-main)', position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.03)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(176, 58, 46, 0.02)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: '1.5', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              口座の作り方は分かったけれど、<br />実際の申し込み画面の操作に不安はありませんか？
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              SBI証券と楽天証券のどちらを選ぶべきか、<br className="sp-hide" />
              クレカ積立の設定方法やNISA枠の使いこなし。
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              ネットの情報だけでは不安な方のために、<br className="sp-hide" />
              東京米国株クラブでは<strong>少人数制（限定4名）の米国株セミナー</strong>を東京で開催しています。<br className="sp-hide" />
              カフェでお茶を飲むような気軽な雰囲気で、初心者の方でも安心してご参加いただけます。
            </p>

            <div className="glass-card" style={{ background: 'var(--bg-white)', borderRadius: '24px', padding: '2rem 1.5rem', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '800', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                セミナーの詳細・開催スケジュールはこちら
              </p>

              <Link href="/seminar" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: '800', fontSize: '1.05rem', transition: 'all 0.3s ease', textDecoration: 'none' }}>
                セミナーの詳細を見る <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
