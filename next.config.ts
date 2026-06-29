import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === non-www -> www ===
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tokyo-us-stock.com',
          },
        ],
        destination: 'https://www.tokyo-us-stock.com/:path*',
        permanent: true,
      },

      // === 旧Slug → 新Slug 301リダイレクト（Notion側Slug一括変更に伴う） ===

      // 配当金シリーズ (DIVIDENDS / dividend)
      { source: '/blog/DIVIDENDS8', destination: '/blog/dividend-stocks-series-08', permanent: true },
      { source: '/blog/DIVIDENDS7', destination: '/blog/dividend-stocks-series-07', permanent: true },
      { source: '/blog/DIVIDENDS6', destination: '/blog/dividend-stocks-series-06', permanent: true },
      { source: '/blog/DIVIDENDS5', destination: '/blog/dividend-stocks-series-05', permanent: true },
      { source: '/blog/DIVIDENDS4', destination: '/blog/dividend-stocks-series-04', permanent: true },
      { source: '/blog/DIVIDENDS3', destination: '/blog/dividend-stocks-series-03', permanent: true },
      { source: '/blog/DIVIDENDS2', destination: '/blog/dividend-stocks-series-02', permanent: true },
      { source: '/blog/dividend1', destination: '/blog/dividend-stocks-series-01', permanent: true },

      // NISAシリーズ
      { source: '/blog/NISA5', destination: '/blog/nisa-series-05', permanent: true },
      { source: '/blog/NISA4', destination: '/blog/nisa-series-04', permanent: true },
      { source: '/blog/NISA3', destination: '/blog/nisa-series-03', permanent: true },
      { source: '/blog/NISA2', destination: '/blog/nisa-series-02', permanent: true },
      { source: '/blog/NISA1', destination: '/blog/nisa-series-01', permanent: true },

      // 投資比較シリーズ (Japan)
      { source: '/blog/Japan8', destination: '/blog/investment-comparison-08', permanent: true },
      { source: '/blog/Japan7', destination: '/blog/investment-comparison-07', permanent: true },
      { source: '/blog/Japan5', destination: '/blog/investment-comparison-05-fx', permanent: true },
      { source: '/blog/Japan4', destination: '/blog/investment-comparison-04', permanent: true },
      { source: '/blog/japan3', destination: '/blog/investment-comparison-03', permanent: true },
      { source: '/blog/Japan2', destination: '/blog/investment-comparison-02', permanent: true },
      { source: '/blog/Japan', destination: '/blog/investment-comparison-01', permanent: true },

      // テクニカル vs ファンダメンタル
      { source: '/blog/fundamental', destination: '/blog/technical-vs-fundamental-analysis', permanent: true },

      // 財務諸表シリーズ (balance)
      { source: '/blog/balance3', destination: '/blog/financial-statements-03', permanent: true },
      { source: '/blog/balance4', destination: '/blog/financial-statements-04', permanent: true },
      { source: '/blog/balance2', destination: '/blog/financial-statements-02', permanent: true },
      { source: '/blog/balance1', destination: '/blog/financial-statements-01', permanent: true },

      // 個別記事
      { source: '/blog/ESBI', destination: '/blog/esbi-four-income-types', permanent: true },
      { source: '/blog/assetsandliabilities', destination: '/blog/assets-vs-liabilities', permanent: true },
      { source: '/blog/taxincrease', destination: '/blog/inflation-and-tax-trap', permanent: true },
      { source: '/blog/securities', destination: '/blog/how-to-choose-a-brokerage', permanent: true },
      { source: '/blog/USstocksvsIndexFunds', destination: '/blog/individual-stocks-vs-index-funds', permanent: true },
      { source: '/blog/index-ETF', destination: '/blog/index-fund-vs-etf', permanent: true },
      { source: '/blog/stop thinking', destination: '/blog/why-we-cant-quit-our-jobs', permanent: true },
      { source: '/blog/stop%20thinking', destination: '/blog/why-we-cant-quit-our-jobs', permanent: true },
      { source: '/blog/Salary', destination: '/blog/japan-salary-stagnation-30-years', permanent: true },
      { source: '/blog/risk', destination: '/blog/risk-tolerance-and-investment-style', permanent: true },
      { source: '/blog/trap', destination: '/blog/robert-kiyosaki-labor-trap', permanent: true },
      { source: '/blog/taishokukin', destination: '/blog/retirement-pension-crisis', permanent: true },
      { source: '/blog/index', destination: '/blog/what-is-index-investing', permanent: true },
      { source: '/blog/oshikatsu', destination: '/blog/stock-investing-as-fan-support', permanent: true },
      { source: '/blog/minimalism', destination: '/blog/minimalism-and-money', permanent: true },
      { source: '/blog/SP500sim', destination: '/blog/savings-vs-sp500-simulation', permanent: true },
      { source: '/blog/S&P500sim', destination: '/blog/savings-vs-sp500-simulation', permanent: true },
      { source: '/blog/S%26P500sim', destination: '/blog/savings-vs-sp500-simulation', permanent: true },
      { source: '/blog/rg', destination: '/blog/picketty-r-greater-than-g', permanent: true },
      { source: '/blog/Inflation', destination: '/blog/japan-inflation-and-rising-prices', permanent: true },
      { source: '/blog/Indexfund', destination: '/blog/index-investing-and-investment-scams', permanent: true },
      { source: '/blog/longterm', destination: '/blog/long-term-investing-and-us-stocks', permanent: true },
      { source: '/blog/ETF1', destination: '/blog/us-etf-series-01', permanent: true },
      { source: '/blog/ETF2', destination: '/blog/us-etf-series-02', permanent: true },
      { source: '/blog/richorpoor', destination: '/blog/rich-vs-poor-kiyosaki', permanent: true },
      { source: '/blog/Money-tips', destination: '/blog/money-management-tips', permanent: true },
    ];
  },
};

export default nextConfig;
