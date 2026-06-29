// Test script to verify getPostBySlug returns null for nonexistent slugs
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

async function test() {
  const slug = 'nonexistent-slug-404-test-v3';
  
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  const page = response.results.find((p) => {
    const s = p.properties.Slug?.rich_text?.[0]?.plain_text;
    if (!s) return false;
    return s.normalize().trim() === slug;
  });

  console.log('Page found:', page ? 'YES' : 'NO (null)');
  console.log('Result:', page || null);
}

test().catch(console.error);
