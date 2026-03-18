import Link from "next/link";

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
            gridTemplateColumns: "minmax(0, 1fr)",
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
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

              <Link
                href="/ru"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "#f3f7fb",
                  fontWeight: 700,
                  background: "transparent",
                }}
              >
                Русский
              </Link>
            </div>

            <h1
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(36px, 6vw, 68px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                maxWidth: 900,
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
                maxWidth: 760,
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

              <Link
                href="/en/projects"
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
                Our projects
              </Link>
            </div>

            <div
              style={{
                marginTop: 34,
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: 18,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(243,247,251,0.62)",
                  }}
                >
                  Region
                </div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>
                  Estonia & Sweden
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: 18,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(243,247,251,0.62)",
                  }}
                >
                  Focus
                </div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>
                  Steel works & installation
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  padding: 18,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(243,247,251,0.62)",
                  }}
                >
                  Language
                </div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>
                  English by default
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}