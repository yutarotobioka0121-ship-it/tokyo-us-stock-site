const { Client } = require('@notionhq/client');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const token = env.match(/NOTION_TOKEN=(.*)/)[1].trim();
const databaseId = env.match(/NOTION_DATABASE_ID=(.*)/)[1].trim();

const notion = new Client({ auth: token });

async function run() {
  const slug = 'TEST記事';
  console.log('Searching for slug:', slug);
  
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });
  
  console.log('Results found:', response.results.length);
  if (response.results.length > 0) {
    console.log('Success! Page ID:', response.results[0].id);
  } else {
    console.log('Failed to find by slug.');
    
    // Check what is in the Slug property for all pages
    const all = await notion.databases.query({ database_id: databaseId });
    all.results.forEach(p => {
      const s = p.properties.Slug?.rich_text[0]?.plain_text;
      const title = p.properties.Title?.title[0]?.plain_text;
      console.log('Page ID:', p.id, 'Slug:', JSON.stringify(s), 'Title:', JSON.stringify(title));
    });
  }
}

run();
