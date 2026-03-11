import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = getT(locale);

  return (
    <footer className="footer">
      <div className="footerRow">
        <div>
          <div style={{ fontWeight: 800, color: "rgba(255,255,255,0.85)" }}>AKWELD</div>
          <div className="small">{t.common.footerLine}</div>
          <div className="small" style={{ marginTop: 8 }}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <Link href={`/${locale}/services`}>{t.nav.services}</Link>
          <Link href={`/${locale}/projects`}>{t.nav.projects}</Link>
          <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
