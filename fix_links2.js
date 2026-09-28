const { execSync } = require('child_process');

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

redirects.forEach(r => {
  try {
    const files = execSync("grep -rnl '" + r.old + "' src/").toString().trim().split('\n').filter(Boolean);
    files.forEach(file => {
      execSync("sed -i '' 's/" + r.old + "/" + r.new + "/g' " + file);
      console.log("Replaced " + r.old + " with " + r.new + " in " + file);
    });
  } catch (e) {
  }
});
