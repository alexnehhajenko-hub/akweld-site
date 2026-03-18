import Link from "next/link";

const LANGS = [
  { href: "/en", code: "EN", label: "English", note: "Main international version" },
  { href: "/ru", code: "RU", label: "Русский", note: "Русская версия сайта" },
];

const SERVICES = [
  "Steel structures",
  "Fabrication",
  "Installation",
  "Workforce rental",
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0a0f14 0%, #0d141b 45%, #101922 100%)",
        color: "#f3f7fb",
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 20px 28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: 32,
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(243,247,251,0.78)",
              }}
            >
              AKWELD
            </div>

            <h1
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(36px, 6vw, 68px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Steel fabrication,
              <br />
              installation
              <br />
              and project support
            </h1>

            <p
              style={{
                margin: "20px 0 0",
                maxWidth: 720,
                fontSize: 18,
                lineHeight: 1.75,
                color: "rgba(243,247,251,0.82)",
              }}
            >
              AKWELD provides steel structures, fabrication, installation and
              workforce rental for industrial and construction projects in
              Estonia and Sweden.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 24,
              }}
            >
              {SERVICES.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 14,
                    color: "rgba(243,247,251,0.88)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 30,
              }}
            >
              <Link
                href="/en/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 170,
                  padding: "14px 18px",
                  borderRadius: 14,
                  textDecoration: "none",
                  background: "#f3f7fb",
                  color: "#0b1117",
                  fontWeight: 700,
                }}
              >
                Contact us
              </Link>

              <Link
                href="/en/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 170,
                  padding: "14px 18px",
                  borderRadius: 14,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "#f3f7fb",
                  fontWeight: 700,
                  background: "transparent",
                }}
              >
                Our services
              </Link>
            </div>
          </div>

          <aside
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: 28,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.025) 100%)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(243,247,251,0.72)",
              }}
            >
              Choose language
            </div>

            <h2
              style={{
                margin: "10px 0 0",
                fontSize: 28,
                lineHeight: 1.15,
              }}
            >
              Select your language
            </h2>

            <p
              style={{
                margin: "12px 0 0",
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(243,247,251,0.76)",
              }}
            >
              Open the language version you prefer. Both versions stay available
              directly from the website.
            </p>

            <div
              style={{
                display: "grid",
                gap: 12,
                marginTop: 24,
              }}
            >
              {LANGS.map((lang) => (
                <Link
                  key={lang.href}
                  href={lang.href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 18,
                    padding: "18px 18px",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#f3f7fb",
                        }}
                      >
                        {lang.label}
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 13,
                          color: "rgba(243,247,251,0.68)",
                        }}
                      >
                        {lang.note}
                      </div>
                    </div>

                    <div
                      style={{
                        minWidth: 54,
                        height: 54,
                        borderRadius: 14,
                        display: "grid",
                        placeItems: "center",
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {lang.code}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 20,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(243,247,251,0.72)",
              }}
            >
              Main website:
              <br />
              <a
                href="https://akweldsteel.com"
                style={{
                  color: "#f3f7fb",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                https://akweldsteel.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}