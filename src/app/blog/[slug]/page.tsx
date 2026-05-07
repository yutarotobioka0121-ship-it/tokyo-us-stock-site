import { getPostBySlug } from '@/lib/notion';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="post-page">
      <header className="post-header">
        <div className="container">
          <Link href="/blog" className="btn-link" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
            <ArrowLeft size={18} /> ブログ一覧へ戻る
          </Link>
          
          <div className="post-meta slide-up">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <h1 className="post-title slide-up delay-1">{post.title}</h1>
        </div>
        
        {post.cover && (
          <div className="post-cover slide-up delay-2">
            <div className="container">
              <div className="post-cover-wrapper glass-card">
                <img src={post.cover} alt={post.title} />
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="post-content slide-up delay-3">
        <div className="container">
          <div className="post-content-inner glass-card">
            {post.content.map((block: any) => {
              const { type } = block;
              const value = block[type];

              // Helper to render rich text
              const renderRichText = (richText: any[]) => {
                return richText.map((t: any, i: number) => {
                  const { annotations, text, href } = t;
                  const style: React.CSSProperties = {
                    fontWeight: annotations.bold ? 'bold' : 'normal',
                    fontStyle: annotations.italic ? 'italic' : 'normal',
                    textDecoration: annotations.strikethrough ? 'line-through' : (annotations.underline ? 'underline' : 'none'),
                    color: annotations.color !== 'default' ? annotations.color : 'inherit',
                  };

                  if (href) {
                    return <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={style}>{t.plain_text}</a>;
                  }
                  return <span key={i} style={style}>{t.plain_text}</span>;
                });
              };

              switch (type) {
                case 'paragraph':
                  return (
                    <p key={block.id} className="notion-p notion-block">
                      {renderRichText(value.rich_text)}
                    </p>
                  );
                case 'heading_1':
                  return (
                    <h1 key={block.id} className="notion-h1 notion-block">
                      {renderRichText(value.rich_text)}
                    </h1>
                  );
                case 'heading_2':
                  return (
                    <h2 key={block.id} className="notion-h2 notion-block">
                      {renderRichText(value.rich_text)}
                    </h2>
                  );
                case 'heading_3':
                  return (
                    <h3 key={block.id} className="notion-h3 notion-block">
                      {renderRichText(value.rich_text)}
                    </h3>
                  );
                case 'bulleted_list_item':
                  return (
                    <ul key={block.id} className="notion-list notion-block">
                      <li className="notion-li">
                        {renderRichText(value.rich_text)}
                      </li>
                    </ul>
                  );
                case 'numbered_list_item':
                  return (
                    <ol key={block.id} className="notion-list notion-block" style={{ listStyleType: 'decimal' }}>
                      <li className="notion-li">
                        {renderRichText(value.rich_text)}
                      </li>
                    </ol>
                  );
                case 'quote':
                  return (
                    <blockquote key={block.id} className="notion-quote notion-block">
                      {renderRichText(value.rich_text)}
                    </blockquote>
                  );
                case 'divider':
                  return <hr key={block.id} className="notion-divider" />;
                case 'image':
                  const src = value.type === 'external' ? value.external.url : value.file.url;
                  return (
                    <figure key={block.id} className="notion-image-block notion-block">
                      <img src={src} alt="Post content" />
                      {value.caption?.length > 0 && (
                        <figcaption className="notion-caption">
                          {renderRichText(value.caption)}
                        </figcaption>
                      )}
                    </figure>
                  );
                case 'code':
                  return (
                    <pre key={block.id} className="notion-code notion-block">
                      <code>
                        {value.rich_text.map((t: any) => t.plain_text).join('')}
                      </code>
                    </pre>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
