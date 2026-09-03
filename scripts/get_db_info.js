require('dotenv').config({ path: '.env.local' });

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_CUSTOMER_DB_ID || process.env.NOTION_DATABASE_ID;

async function getDatabaseInfo() {
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    },
  });

  const json = await res.json();
  console.log('Database Title:', json.title?.[0]?.plain_text);
  console.log('Properties:', Object.keys(json.properties || {}));
  console.log('Properties Detail:', JSON.stringify(json.properties, null, 2));
}

getDatabaseInfo();
