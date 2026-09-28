const fs = require('fs');
const path = require('path');

const redirects = [
  { old: 'savings-vs-sp500-simulation', new: 'sp500-beginners-guide' },
  { old: 'index-fund-vs-etf', new: 'sp500-beginners-guide' },
  { old: 'what-is-index-investing', new: 'sp500-beginners-guide' },
  { old: 'long-term-investing-and-us-stocks', new: 'us-stock-beginners-guide' },
  { old: 'how-to-choose-a-brokerage', new: 'us-stock-beginners-guide' },
  { old: 'investment-comparison-08', new: 'us-stock-beginners-guide' },
  { old: 'index-investing-and-investment-scams', new: 'us-stock-beginners-guide' },
  { old: 'inflation-and-tax-trap', new: 'us-stock-tax-complete-guide' },
  { old: 'financial-statements-02', new: 'financial-statements-01' },
  { old: 'financial-statements-04', new: 'financial-statements-03' },
  { old: 'minimalism-and-money', new: 'esbi-four-income-types' },
  { old: 'robert-kiyosaki-labor-trap', new: 'esbi-four-income-types' },
  { old: 'retirement-pension-crisis', new: '../knowledge/nisa' },
  { old: 'japan-salary-stagnation-30-years', new: '../knowledge/nisa' },
  { old: 'picketty-r-greater-than-g', new: 'sp500-beginners-guide' },
  { old: 'us-stock-tax-guide', new: 'us-stock-tax-complete-guide' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;
  redirects.forEach(r => {
    if (content.includes(r.old)) {
      // Basic string replace
      content = content.split(r.old).join(r.new);
      changed = true;
      console.log(`Replaced ${r.old} in ${file}`);
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
  }
});
