const { createClient } = require('microcms-js-sdk');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

async function test() {
  try {
    const data = await client.get({
      endpoint: 'usstock',
    });
    console.log(JSON.stringify(data.contents, null, 2));
  } catch (e) {
    console.error(e);
  }
}

test();
