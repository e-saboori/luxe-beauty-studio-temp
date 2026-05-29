import { faqItems } from "@/lib/site-data";

export function FAQSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-heading faq-heading">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="faq-grid">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
