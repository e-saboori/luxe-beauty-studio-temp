import { socialLinks } from "@/lib/site-data";

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media links">
      {socialLinks.map(({ platform, href, icon: Icon }) => (
        <a key={platform} href={href} target="_blank" rel="noreferrer" aria-label={platform}>
          <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
