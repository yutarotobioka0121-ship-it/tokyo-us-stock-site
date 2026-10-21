// 記事・ページのパスから、案内するセミナーを判定する共通ルール
// （サーバー・クライアントの両方から使うため、外部依存を持たないこと）
//
// 判定の順番：
//   1. キャッシュフローゲーム会（slug に下記の語を含む）
//   2. NISA初心者セミナー（slug に nisa を含む、または下記に列挙した記事・ページ）
//   3. 上記以外はすべて米国株セミナー
// 語や記事を追加する場合は、下の配列に足してください。

export type SeminarType = 'us_stock' | 'nisa' | 'cashflow_game';

export interface SeminarInfo {
  type: SeminarType;
  /** セミナー名（固定バーなどで使用） */
  name: string;
  /** セミナーページのパス */
  href: string;
  /** インライン案内の見出し */
  heading: string;
  /** インライン案内の1行説明 */
  description: string;
}

/** キャッシュフローゲーム会に案内する slug の語 */
const CASHFLOW_GAME_KEYWORDS = [
  'kiyosaki',
  'esbi',
  'assets-vs-liabilities',
  'rich-vs-poor',
  'financial-statements',
  'money-management',
  'why-we-cant-quit',
  'minimalism',
];

/** NISA初心者セミナーに案内する slug の語 */
const NISA_KEYWORDS = ['nisa'];

/** NISA初心者セミナーに案内する記事の slug（完全一致） */
const NISA_SLUGS = [
  'us-stock-tax-guide',
  'us-stock-tax-complete-guide',
  'us-stock-kakutei-shinkoku',
  'us-stock-gaikoku-zei-kojo',
  'us-stock-tokutei-koza-guide',
  'inflation-and-tax-trap',
];

/** NISA初心者セミナーに案内するページのパス（完全一致） */
const NISA_PATHS = ['/knowledge/nisa', '/knowledge/tax', '/knowledge/tokutei-koza'];

export const SEMINARS: Record<SeminarType, SeminarInfo> = {
  us_stock: {
    type: 'us_stock',
    name: '米国株セミナー',
    href: '/seminar',
    heading: 'この記事の内容を、少人数で直接学べます',
    description: '初心者向け・少人数制・金融商品の勧誘はありません',
  },
  nisa: {
    type: 'nisa',
    name: 'NISA初心者セミナー',
    href: '/seminar/nisa',
    heading: '新NISAの始め方を、少人数で直接学べます',
    description: '初心者向け・少人数制・金融商品の勧誘はありません',
  },
  cashflow_game: {
    type: 'cashflow_game',
    name: 'キャッシュフローゲーム会',
    href: '/seminar/cashflow-game',
    heading: 'この考え方を、ゲームで体験してみませんか',
    description: 'ボードゲームで遊びながら、お金の流れを学ぶ2時間の体験会です',
  },
};

function normalizePath(pathname: string): string {
  let p = (pathname || '').split('?')[0].split('#')[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    // そのまま使う
  }
  p = p.toLowerCase();
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

export function getSeminarTypeForPath(pathname: string): SeminarType {
  const path = normalizePath(pathname);
  const slug = path.split('/').filter(Boolean).pop() || '';

  if (CASHFLOW_GAME_KEYWORDS.some((k) => slug.includes(k))) return 'cashflow_game';

  if (
    NISA_PATHS.includes(path) ||
    NISA_SLUGS.includes(slug) ||
    NISA_KEYWORDS.some((k) => slug.includes(k))
  ) {
    return 'nisa';
  }

  return 'us_stock';
}

export function getSeminarForPath(pathname: string): SeminarInfo {
  return SEMINARS[getSeminarTypeForPath(pathname)];
}
