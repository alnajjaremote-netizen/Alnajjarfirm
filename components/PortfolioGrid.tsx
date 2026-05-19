import type { PortfolioCategory } from "@/types";
import { resolveImagePath } from "@/lib/utils";
import { InstagramIcon, TikTokIcon } from "@/components/icons";
import GrowthText from "@/components/GrowthText";

interface PortfolioGridProps {
  categories: PortfolioCategory[];
}

export default function PortfolioGrid({ categories }: PortfolioGridProps) {
  return (
    <>
      <section className="section reveal">
        <div className="section-title-row">
          <h2>Our results</h2>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.slug} className="section reveal">
          <div className="section-title-row">
            <h3>{cat.name}</h3>
          </div>
          <div
            className="portfolio-grid slider-on-mobile stagger-children"
            role="region"
            aria-label={`${cat.name} cards`}
          >
            {cat.items.slice(0, 6).map((item) => {
              const img = resolveImagePath(item.image || "");
              const hasStats = item.instaGrowth || item.tiktokGrowth;

              return (
                <article key={item.name} className="portfolio-card client-card">
                  <img
                    className="portfolio-img"
                    loading="lazy"
                    decoding="async"
                    src={img}
                    alt={item.name || "Portfolio"}
                  />

                  <div className="card-social-links">
                    {item.instaLink && (
                      <a
                        href={item.instaLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                    )}
                    {item.tiktokLink && (
                      <a
                        href={item.tiktokLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="TikTok"
                      >
                        <TikTokIcon />
                      </a>
                    )}
                  </div>

                  <div className="portfolio-overlay">
                    <div className="portfolio-meta">
                      <div className="portfolio-name">{item.name}</div>
                      <div className="portfolio-role">{item.role}</div>

                      {hasStats ? (
                        <div className="card-growth">
                          {item.instaGrowth && (
                            <a
                              href={item.instaLink || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className="growth-line"
                            >
                              <span className="growth-platform growth-platform-icon">
                                <InstagramIcon />
                              </span>
                              <span>
                                <GrowthText text={item.instaGrowth} />
                              </span>
                            </a>
                          )}
                          {item.tiktokGrowth && (
                            <a
                              href={item.tiktokLink || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className="growth-line"
                            >
                              <span className="growth-platform growth-platform-icon">
                                <TikTokIcon />
                              </span>
                              <span>
                                <GrowthText text={item.tiktokGrowth} />
                              </span>
                            </a>
                          )}
                        </div>
                      ) : item.shows ? (
                        <div className="card-shows">
                          <span className="card-shows-label">Shows:</span>{" "}
                          {item.shows}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}
