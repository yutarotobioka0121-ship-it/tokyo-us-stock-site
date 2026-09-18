require('dotenv').config({ path: '.env.local' });
const { createClient } = require('microcms-js-sdk');

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

async function run() {
  const data = await client.get({
    endpoint: 'usstock',
    queries: { orders: '-publishedAt' },
  });
  console.log(JSON.stringify(data.contents, null, 2));
}

run();
