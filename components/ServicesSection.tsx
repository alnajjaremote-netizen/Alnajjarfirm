import { SERVICE_ICONS, resolveImagePath } from "@/lib/utils";

interface ServicesSectionProps {
  services: string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function ServicesSection({ services, ctaLabel, ctaHref }: ServicesSectionProps) {
  return (
    <section className="section services-section reveal">
      <div className="section-title-row services-title-row">
        <h2>Our services</h2>
        <div className="section-title-cta">
          <a className="neuros-button button-pulse" href={ctaHref} target="_blank" rel="noreferrer">
            <span className="button-inner">{ctaLabel}</span>
          </a>
        </div>
      </div>
      <div className="services-grid stagger-children">
        {services.map((service) => {
          const iconPath = SERVICE_ICONS[service] || "";
          const label = service.replace(" / ", "<br>");
          return (
            <article key={service} className="service-card-item">
              <span
                className="service-label"
                dangerouslySetInnerHTML={{ __html: label }}
              />
              {iconPath && (
                <img
                  className="service-icon-img"
                  src={resolveImagePath(iconPath)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={30}
                  height={30}
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
