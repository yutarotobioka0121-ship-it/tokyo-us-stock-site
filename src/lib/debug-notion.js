const { Client } = require('@notionhq/client');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const token = env.match(/NOTION_TOKEN=(.*)/)[1].trim();
const databaseId = env.match(/NOTION_DATABASE_ID=(.*)/)[1].trim();

const notion = new Client({ auth: token });

async function debug() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 5
    });
    console.log('Results count:', response.results.length);
    if (response.results.length > 0) {
      response.results.forEach((page, index) => {
        const props = page.properties;
        console.log(`--- Page ${index + 1} (${page.id}) ---`);
        console.log('Available properties:', Object.keys(props));
        const dateProp = props['Date'];
        if (dateProp) {
          console.log('Date property type:', dateProp.type);
          console.log('Date property value:', JSON.stringify(dateProp.date));
        } else {
          console.log('Date property NOT FOUND');
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}

debug();
