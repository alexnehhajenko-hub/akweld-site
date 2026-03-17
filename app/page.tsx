import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b0f14",
        color: "#f3f7fb",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 760,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: 32,
          background: "rgba(255,255,255,0.04)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 40,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          AKWELD
        </h1>

        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(243,247,251,0.82)",
          }}
        >
          Steel structures, fabrication, installation, workforce rental.
        </p>

        <p
          style={{
            marginTop: 12,
            marginBottom: 0,
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(243,247,251,0.68)",
          }}
        >
          Select language / Выберите язык
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 28,
          }}
        >
          <Link
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 140,
              padding: "14px 18px",
              borderRadius: 12,
              textDecoration: "none",
              background: "#f3f7fb",
              color: "#0b0f14",
              fontWeight: 700,
            }}
          >
            English
          </Link>

          <Link
            href="/ru"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 140,
              padding: "14px 18px",
              borderRadius: 12,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "#f3f7fb",
              fontWeight: 700,
            }}
          >
            Русский
          </Link>
        </div>
      </div>
    </main>
  );
}
