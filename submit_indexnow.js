const fs = require('fs');

async function submitToIndexNow() {
  const host = 'www.tokyo-us-stock.com';
  const key = '8782a225c50c4bb7a33edb2ff82ff2b0';
  
  // Get all metrics series posts
  // (Assuming we can't easily fetch Notion posts here, I will just list the ones I know or can fetch from production)
  // Let's fetch from production API or just list them.
  // Actually, I can fetch from https://www.tokyo-us-stock.com/sitemap.xml
  
  const response = await fetch('https://www.tokyo-us-stock.com/sitemap.xml');
  const xml = await response.text();
  
  const urls = [];
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  for (const match of matches) {
    const url = match[1];
    if (url.includes('valuation-metrics-series-')) {
      urls.push(url);
    }
  }
  
  // Add specific pages
  urls.push('https://www.tokyo-us-stock.com/seminar/cashflow-game');
  urls.push('https://www.tokyo-us-stock.com/seminar/cashflow-game/guide');
  urls.push('https://www.tokyo-us-stock.com/llms.txt');
  urls.push('https://www.tokyo-us-stock.com/about'); // I changed about page facts
  urls.push('https://www.tokyo-us-stock.com/seminar'); // I changed seminar page facts
  urls.push('https://www.tokyo-us-stock.com/seminar/nisa'); // I changed nisa page facts

  // De-duplicate
  const uniqueUrls = [...new Set(urls)];

  const body = {
    host: host,
    key: key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: uniqueUrls
  };

  console.log('Submitting URLs to IndexNow:', body.urlList);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    });
    
    if (res.ok) {
      console.log('Success! API Response:', res.status, res.statusText);
    } else {
      console.log('Failed! API Response:', res.status, res.statusText);
      const text = await res.text();
      console.log('Error details:', text);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

submitToIndexNow();
