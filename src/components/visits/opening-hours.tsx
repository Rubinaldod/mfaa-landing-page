import type { OpeningHours as OpeningHoursType } from "@/lib/strapi/types/museum-info";

type Props = {
  openingHours: OpeningHoursType[];
};

function formatTime(time: string): string {
  return time.slice(0, 5);
}

export function OpeningHours({ openingHours }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderTop: "2px solid rgba(212,175,55,0.35)",
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
        Horários
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
        Funcionamento
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {openingHours.map((entry) => (
          <div
            key={entry.period}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.78rem",
                letterSpacing: "0.05em",
                color: "#6b6560",
              }}
            >
              {entry.period}
            </span>
            {entry.IsClosedForPublic ||
            !entry.oppeningTime ||
            !entry.closingTime ? (
              <span
                style={{
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8B0000",
                }}
              >
                Fechado
              </span>
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                }}
              >
                {formatTime(entry.oppeningTime)} –{" "}
                {formatTime(entry.closingTime)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
