const { Client } = require('@notionhq/client');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const token = env.match(/NOTION_TOKEN=(.*)/)[1].trim();
const databaseId = env.match(/NOTION_DATABASE_ID=(.*)/)[1].trim();

const notion = new Client({ auth: token });

async function run() {
  const pageId = '34ae9ee8-b70b-8057-a473-d5523251d2b7';
  console.log('Fetching blocks for Page ID:', pageId);
  
  const response = await notion.blocks.children.list({ block_id: pageId });
  
  console.log('Blocks count:', response.results.length);
  response.results.forEach((block, i) => {
    console.log(`Block ${i + 1}: Type=${block.type}`);
  });
}

run();
