export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="form-section">
        <div className="container">
          <div className="form-container glass-card">
            <span className="section-tag">CONTACT</span>
            <h1 className="section-title">お問い合わせ</h1>
            <p className="about-desc">
              ご質問、お仕事のご依頼、その他何かございましたら、以下のフォームよりお気軽にお問い合わせください。
            </p>

            <form name="contact" method="POST" data-netlify="true" className="contact-form">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">お名前</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="山田 太郎" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">メールアドレス</label>
                <input type="email" id="email" name="email" required className="form-input" placeholder="example@mail.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">件名</label>
                <select id="subject" name="subject" className="form-select">
                  <option value="study-group">勉強会について</option>
                  <option value="consultation">個別相談の依頼</option>
                  <option value="business">仕事のご依頼</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">メッセージ内容</label>
                <textarea id="message" name="message" required className="form-textarea" placeholder="メッセージを入力してください"></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                送信する
              </button>
              
              <p className="form-helper">
                ※通常2〜3営業日以内にご返信いたします。
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
