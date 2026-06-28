# ブログ自動更新のSEO・投稿ルール (tokyo-us-stock.com)

このドキュメントは、<strong>Claude Cowork</strong>等のブログ自動更新システムが新規にブログ記事を生成・投稿する際に必ず守るべきルールとチェックリストをまとめたものです。

---

## 📌 必須チェックリスト（記事投稿前）

投稿を実行する前に、以下の項目がすべて満たされているか必ず確認してください。

- [ ] <strong>個別タイトル（title）の設定</strong>
  * タイトルが記事固有のものになっているか（サイト全体のデフォルトタイトルがそのまま使われていないか）。
  * 命名ルール：`{記事タイトル} | 東京米国株クラブ`
- [ ] <strong>meta description の文字数と内容</strong>
  * 全角で <strong>115〜130文字以内</strong> に収まっているか。
  * 記事の主テーマキーワードと、読者が「読んで何がわかるか（ベネフィット）」を含んでいるか。
- [ ] <strong>URL スラッグ（Slug）の厳守</strong>
  * 半角英数字とハイフン（`-`）のみを使用しているか。
  * すべて <strong>小文字</strong> になっているか（大文字禁止）。
  * スペース、記号（`&`, `%`, `#`, `?`, `!` など）、日本語は一切含まれていないか。
  * 既存の記事と重複していないか。
- [ ] <strong>H1タグの重複チェック</strong>
  * Notionブロック内で <strong>「大見出し（heading_1 / H1）」を使用しないこと</strong>（テンプレート側が記事タイトルを自動的に唯一の `<h1>` として出力するため、本文中に大見出しを置くと重複エラーになります。見出しは「中見出し（heading_2）」以下から始めてください）。
- [ ] <strong>canonical の設定</strong>
  * `https://www.tokyo-us-stock.com/blog/{slug}`（`www` あり）になっているか。
- [ ] <strong>内部リンクの設置</strong>
  * 本文内に、関連記事や関連する知識ページ（例: `/knowledge/nisa` 等）への内部リンクを <strong>最低2本</strong> 設置しているか。
- [ ] <strong>JSON-LD スキーマ</strong>
  * `Article` スキーマが正常に出力されるデータ構造になっているか。
- [ ] <strong>OGP メタタグ</strong>
  * `og:title`, `og:description`, `og:image` が正しく設定されているか。
- [ ] <strong>sitemap.xml への追加</strong>
  * 投稿後、自動的にサイトマップ（`/sitemap.xml`）にURLが追加されるか。

---

## 📌 スラッグ命名ルール（再掲・厳守）

* <strong>使用可能な文字</strong>: 半角英数字、ハイフン（`-`）のみ
* <strong>小文字化</strong>: すべて小文字（大文字禁止）
* <strong>長さ</strong>: 50文字以内
* <strong>キーワード</strong>: 日本語テーマを英語に翻訳し、主要キーワードを含める

### ❌ 悪い例（NG）
* `NISA1`（大文字あり、番号のみ）
* `stop thinking`（スペースあり）
* `S&P500sim`（記号 `&` あり）
* `Japan5`（重複する危険性あり）

### 🟢 良い例（OK）
* `nisa-tsumitate-guide`
* `us-stocks-vs-japan-stocks-comparison`
* `stop-thinking`
* `savings-vs-sp500`

---

## 📌 シリーズ記事の命名規則

シリーズ物の記事を投稿する場合、スラッグは以下に統一してください。

* <strong>新NISAシリーズ</strong>: `nisa-series-01`, `nisa-series-02`, ...
* <strong>財務諸表シリーズ</strong>: `financial-statements-01`, `financial-statements-02`, ...
* <strong>投資比較シリーズ</strong>: `investment-comparison-01`, `investment-comparison-02`, ...

---

## 📌 meta description 自動生成プロンプト（AI投稿用）

記事を生成する際、以下のプロンプトを使用して meta description を作成してください。

```
以下の記事タイトルと本文冒頭から、SEO用のmeta descriptionを生成してください。

ルール:
- 全角115〜130字以内
- 記事の主テーマキーワードを必ず含む
- 読者が「読んで何がわかるか」を具体的に書く
- 「〜をわかりやすく解説」「〜を徹底比較」など行動を促す表現を含む
- サイト名（東京米国株クラブ）は含めなくてよい

記事タイトル: {TITLE}
本文冒頭200字: {CONTENT_EXCERPT}
```
