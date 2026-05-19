import { resolveImagePath } from "@/lib/utils";
import type { TeamMemberImage } from "@/types";

interface TeamSectionProps {
  team: Record<string, string[]>;
  teamImages: Record<string, TeamMemberImage>;
  ctaLabel: string;
  ctaHref: string;
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function TeamSection({ team, teamImages, ctaLabel, ctaHref }: TeamSectionProps) {
  const groups = Object.entries(team).filter(
    ([, members]) => Array.isArray(members) && members.length > 0
  );

  return (
    <>
      <section className="section reveal">
        <div className="section-title-row">
          <h2>Our team</h2>
          <div className="section-title-cta">
            <a className="neuros-button button-pulse" href={ctaHref} target="_blank" rel="noreferrer">
              <span className="button-inner">{ctaLabel}</span>
            </a>
          </div>
        </div>
      </section>

      {groups.map(([group, members]) => (
        <div key={group} className="team-group reveal">
          <h3>{group}</h3>
          <div className="team-grid slider-on-mobile stagger-children">
            {members.map((m) => {
              const [nameRaw, roleRaw] = m.split("—");
              const name = (nameRaw || "").trim();
              const role = (roleRaw || "").trim();
              const fromMap = teamImages[name];

              return (
                <article key={name} className="team-card portfolio-card team-member">
                  {fromMap ? (
                    <img
                      className="portfolio-img"
                      loading="lazy"
                      src={resolveImagePath(fromMap.image)}
                      alt={name}
                    />
                  ) : (
                    <div className="portfolio-img team-avatar-initials" aria-hidden="true">
                      {initials(name)}
                    </div>
                  )}
                  <div className="portfolio-overlay">
                    <div className="portfolio-meta">
                      <div className="portfolio-name">{name}</div>
                      <div className="portfolio-role">{role}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
