import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      {/* Gold top accent */}
      <div style={{ height: 2, backgroundColor: "#D4AF37", opacity: 0.6 }} />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#F2EDE4",
                letterSpacing: "0.02em",
                marginBottom: "0.5rem",
              }}
            >
              Museu das Forças Armadas
            </div>
            <div
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "1.25rem",
              }}
            >
              República de Angola
            </div>
            <p
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.85rem",
                color: "#5A5045",
                lineHeight: 1.7,
                maxWidth: "22ch",
              }}
            >
              Preservando a memória e a honra das Forças Armadas de Angola para
              as gerações presentes e futuras.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "1.25rem",
              }}
            >
              Navegação
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/", label: "Início" },
                { href: "/galeria", label: "Galeria" },
                { href: "/agendar-visita", label: "Agendar Visita" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link-footer"
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "1.25rem",
              }}
            >
              Contacto
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Luanda, Angola" },
                { label: "Segunda — Sábado, 09h–17h" },
                { label: "Domingo e Feriados: Encerrado" },
              ].map((item) => (
                <span
                  key={item.label}
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.8rem",
                    color: "#5A5045",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(212,175,55,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "#3A3028",
              textTransform: "uppercase",
            }}
          >
            &copy; {year} Museu das Forças Armadas de Angola
          </p>
          <div
            style={{
              width: "2rem",
              height: "1px",
              backgroundColor: "#D4AF37",
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </footer>
  );
}
