import Image from "next/image";
import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const DIRECTOR_NAME = "Anton Morozov";
const DIRECTOR_PHOTO = "/director-anton-morozov.jpg";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = getT(locale);

  return (
    <footer className="footer">
      <div className="footerRow">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 96,
              height: 120,
              borderRadius: 16,
              overflow: "hidden",
              flexShrink: 0,
              background: "#0a1017",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <Image
              src={DIRECTOR_PHOTO}
              alt={DIRECTOR_NAME}
              fill
              sizes="96px"
              style={{ objectFit: "cover" }}
            />
          </div>

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
