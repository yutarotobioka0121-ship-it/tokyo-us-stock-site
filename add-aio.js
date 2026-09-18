const fs = require('fs');

const data = {
  'nisa-us-stock-tax-free': [
    "新NISAで米国株を買うと日本の税金（約20%）は完全に非課税になる",
    "ただし配当金にかかる米国現地の税金（10%）は非課税にならない",
    "米国現地の税金は外国税額控除でも取り戻せないため注意が必要"
  ],
  'us-stock-gaikoku-zei-kojo': [
    "外国税額控除とは、米国株の配当にかかる日米の二重課税を取り戻す制度",
    "確定申告を行うことで、米国で引かれた10%の税金の一部または全額が還付される",
    "NISA口座で受け取った配当金は外国税額控除の対象外となるため注意が必要"
  ],
  'us-stock-kakutei-shinkoku': [
    "特定口座（源泉徴収あり）なら米国株の確定申告は原則不要",
    "一般口座や特定口座（源泉徴収なし）の場合は自分で確定申告が必要",
    "外国税額控除で税金を取り戻す場合や、複数証券会社で損益通算をする場合は確定申告を行うと得になる"
  ],
  'us-stock-tax-guide': [
    "米国株の利益（譲渡益と配当金）には原則として約20.315%の税金がかかる",
    "配当金は米国で10%引かれた後に日本で課税される「二重課税」となる",
    "新NISAを利用すれば日本の税金はゼロになり、特定口座なら確定申告の手間を省ける"
  ],
  'us-stock-tokutei-koza-guide': [
    "特定口座（源泉徴収あり）は税金計算と納税を証券会社が代行してくれるため初心者におすすめ",
    "確定申告が不要になり、会社員でも手間なく米国株投資が始められる",
    "一般口座は自分で年間の損益を計算し確定申告を行う必要があるため上級者向け"
  ]
};

for (const [slug, summary] of Object.entries(data)) {
  const path = `src/app/blog/${slug}/page.tsx`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf-8');
    const summaryStr = `\n      aioSummary={[\n${summary.map(s => `        "${s}"`).join(',\n')}\n      ]}`;
    // Insert after knowledgeDesc="..." or knowledgeTitle="..." if desc doesn't exist
    content = content.replace(/(knowledgeDesc="[^"]*")/, `$1${summaryStr}`);
    fs.writeFileSync(path, content);
    console.log(`Updated ${slug}`);
  } else {
    console.log(`File not found: ${slug}`);
  }
}
