import { strapiConfig } from "@/lib/strapi/config";
import type { StrapiData } from "@/lib/strapi/types/common";
import type { Event } from "@/lib/strapi/types/event";
import { formatTime, formatTimeRange, getMonthName } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import AddToCalendarButton from "./add-to-calendar-button";

type Props = {
  event: StrapiData<Event>;
};

export default function EventItem({ event }: Props) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isMultiDay = startDate.toDateString() !== endDate.toDateString();

  return (
    <div
      className="event-item-card"
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "0.125rem",
        overflow: "hidden",
      }}
    >
      {/* Content row — date badge | divider | info | calendar button */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          padding: "2rem 2rem 2rem 2.5rem",
          alignItems: "flex-start",
          minWidth: 0,
        }}
      >
        {/* Date badge */}
        <div style={{ flexShrink: 0, textAlign: "center", minWidth: "4rem" }}>
          {isMultiDay ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-family-display)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#D4AF37",
                    lineHeight: 1,
                  }}
                >
                  {startDate.getDate()}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6b6560",
                  }}
                >
                  {getMonthName(startDate)}
                </div>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "1.5rem",
                  backgroundColor: "rgba(212,175,55,0.3)",
                  margin: "0 auto",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-family-display)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#b8962e",
                    lineHeight: 1,
                  }}
                >
                  {endDate.getDate()}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#9a9288",
                  }}
                >
                  {getMonthName(endDate)}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  fontFamily: "var(--font-family-display)",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "#D4AF37",
                  lineHeight: 1,
                }}
              >
                {startDate.getDate()}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b6560",
                  marginTop: "0.2rem",
                }}
              >
                {getMonthName(startDate)}
              </div>
            </div>
          )}
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "1px",
            backgroundColor: "rgba(212,175,55,0.2)",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        />

        {/* Event info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            {event.title}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginBottom: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "#6b6560",
              }}
            >
              <Clock style={{ width: 12, height: 12, color: "#D4AF37" }} />
              {isMultiDay ? (
                <span>
                  {startDate.getDate()} {getMonthName(startDate)},{" "}
                  {formatTime(startDate)} — {endDate.getDate()}{" "}
                  {getMonthName(endDate)}, {formatTime(endDate)}
                </span>
              ) : (
                <span>{formatTimeRange(startDate, endDate)}</span>
              )}
            </div>

            {event.location && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-family-ui)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "#6b6560",
                }}
              >
                <MapPin style={{ width: 12, height: 12, color: "#8B0000" }} />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          <p
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.82rem",
              color: "#6b6560",
              lineHeight: 1.7,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {event.description}
          </p>
        </div>

        {/* Calendar button */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <AddToCalendarButton
            title={event.title}
            startDate={startDate}
            endDate={endDate}
            description={event.description}
            location={event.location}
          />
        </div>
      </div>

      {/* Thumbnail — right side, stretches full card height */}
      {event.image && (
        <div
          style={{
            position: "relative",
            width: 160,
            flexShrink: 0,
            alignSelf: "stretch",
          }}
        >
          <Image
            fill
            src={`${strapiConfig.baseUrl}${event.image.url}`}
            alt={event.image.alternativeText ?? event.title}
            style={{
              objectFit: "cover",
              filter: "sepia(5%) brightness(0.97)",
            }}
            sizes="160px"
          />
        </div>
      )}
    </div>
  );
}
