import Link from "next/link";

export default function CTASection() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#6B0000",
        padding: "7rem 0",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Diagonal decorative line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)",
        }}
      />

      <div
        className="container mx-auto px-6"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        {/* Label */}
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.7)",
            marginBottom: "1.5rem",
          }}
        >
          Museu das Forças Armadas · Luanda
        </span>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#F2EDE4",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          Venha Conhecer
          <br />
          <em style={{ fontStyle: "italic", color: "rgba(242,237,228,0.7)" }}>
            a Nossa História
          </em>
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "3rem",
            height: "1px",
            backgroundColor: "rgba(212,175,55,0.5)",
            margin: "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.9rem",
            letterSpacing: "0.08em",
            color: "rgba(242,237,228,0.55)",
            maxWidth: "42ch",
            margin: "0 auto 3rem",
            lineHeight: 1.8,
            textTransform: "uppercase",
          }}
        >
          Artefactos, documentos e memórias que moldaram a nação angolana.
          Agende a sua visita hoje.
        </p>

        <Link
          href="/agendar-visita"
          className="btn-gold"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "#0C0C0C",
            fontFamily: "var(--font-family-ui)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "1.1rem 3rem",
          }}
        >
          Agendar Visita
        </Link>
      </div>
    </section>
  );
}
