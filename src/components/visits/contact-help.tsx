import { Mail, Phone } from "lucide-react";

type Props = {
  phoneNumber: string;
  email: string;
};

export function ContactHelp({ email, phoneNumber }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        padding: "1.75rem",
        borderTop: "2px solid rgba(212,175,55,0.4)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-family-ui)",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.7)",
          marginBottom: "0.75rem",
        }}
      >
        Apoio
      </div>
      <h3
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "#F2EDE4",
          marginBottom: "1.25rem",
        }}
      >
        Precisa de Ajuda?
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {phoneNumber && (
          <a
            href={`tel:${phoneNumber}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              color: "#D4AF37",
              textDecoration: "none",
            }}
          >
            <Phone style={{ width: 14, height: 14, flexShrink: 0 }} />
            {phoneNumber}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              color: "#D4AF37",
              textDecoration: "none",
            }}
          >
            <Mail style={{ width: 14, height: 14, flexShrink: 0 }} />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
