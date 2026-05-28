import EventItem from "@/components/event/event-item";
import EventItemSkeleton from "@/components/event/event-item-skeleton";
import { getNextEvents } from "@/lib/strapi/services/events";

export default async function EventsSection() {
  const { data: events } = await getNextEvents();

  return (
    <section style={{ backgroundColor: "#f8f7f5", padding: "7rem 0" }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "1rem",
            }}
          >
            Agenda · Eventos
          </span>
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "#D4AF37",
              marginBottom: "1.25rem",
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "0.01em",
              lineHeight: 1.1,
            }}
          >
            Próximos Eventos
          </h2>
        </div>

        <div style={{ maxWidth: "56rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {events.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "5rem 0",
                borderTop: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "#D4AF37",
                  opacity: 0.5,
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#9a9288",
                }}
              >
                Nenhum evento agendado de momento
              </p>
            </div>
          ) : (
            events.map((event) => <EventItem key={event.id} event={event} />)
          )}
        </div>
      </div>
    </section>
  );
}

export function EventsSectionSkeleton() {
  return (
    <section style={{ backgroundColor: "#f8f7f5", padding: "7rem 0" }}>
      <div className="container mx-auto px-6">
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              height: "0.65rem",
              width: "8rem",
              backgroundColor: "#e8e4de",
              marginBottom: "1rem",
              borderRadius: 1,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "#D4AF37",
              opacity: 0.3,
              marginBottom: "1.25rem",
            }}
          />
          <div
            style={{
              height: "2.5rem",
              width: "16rem",
              backgroundColor: "#e8e4de",
              borderRadius: 1,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
        <div style={{ maxWidth: "56rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["s1", "s2", "s3"].map((key) => (
            <EventItemSkeleton key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
