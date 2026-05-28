type Props = {
  information: {
    id: number;
    information: string;
  }[];
};

export function ImportantInfo({ information }: Props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(212,175,55,0.05)",
        border: "1px solid rgba(212,175,55,0.25)",
        padding: "1.75rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-family-ui)",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#D4AF37",
          marginBottom: "0.75rem",
        }}
      >
        Atenção
      </div>
      <h3
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "#1a1a1a",
          marginBottom: "1.25rem",
        }}
      >
        Informações Importantes
      </h3>

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {information.map((info) => (
          <li
            key={info.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                color: "#D4AF37",
                fontWeight: 700,
                fontSize: "0.9rem",
                lineHeight: 1.5,
                flexShrink: 0,
              }}
            >
              —
            </span>
            <span
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.8rem",
                color: "#6b6560",
                lineHeight: 1.6,
              }}
            >
              {info.information}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
