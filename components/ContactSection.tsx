import type { Contact } from "@/types";
import ContactForm from "@/components/ContactForm";

interface ContactSectionProps {
  contacts: Contact[];
  subtitle: string;
}

export default function ContactSection({ contacts, subtitle }: ContactSectionProps) {
  return (
    <section className="section contact-section">
      <div className="contact-top">
        <div className="contact-left">
          <h2>Speak to Our Team</h2>
          <p className="contact-subtitle">{subtitle}</p>
          <div className="contact-list">
            {contacts.map((item, i) => (
              <p key={i} className="contact-row">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="contact-map-wrap">
        <iframe
          title="Alnajjar Firm location — Awkar, Mount Lebanon"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=33.9281,35.6019&z=16&output=embed"
        />
      </div>
    </section>
  );
}
