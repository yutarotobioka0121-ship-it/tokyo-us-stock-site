import React from 'react';

export default function Loading() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="skeleton skeleton-tag" style={{ margin: '0 auto 1rem' }}></div>
          <div className="skeleton skeleton-title" style={{ margin: '0 auto 1.5rem' }}></div>
          <div className="skeleton skeleton-text" style={{ margin: '0 auto' }}></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="blog-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="blog-card glass-card">
                <div className="skeleton skeleton-image" style={{ borderRadius: '20px 20px 0 0' }}></div>
                <div className="blog-card-content">
                  <div className="skeleton skeleton-meta" style={{ marginBottom: '1rem' }}></div>
                  <div className="skeleton skeleton-title-sm" style={{ marginBottom: '1rem' }}></div>
                  <div className="skeleton skeleton-text-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
