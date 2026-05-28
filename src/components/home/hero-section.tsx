import { strapiConfig } from "@/lib/strapi/config";
import { getHeroSectionData } from "@/lib/strapi/services/museum-info";
import Link from "next/link";

export function HeroSectionSkeleton() {
  return (
    <section
      style={{
        minHeight: "100svh",
        backgroundColor: "#0c0c0c",
        display: "flex",
        alignItems: "flex-end",
        padding: "6rem 0",
      }}
    >
      <div className="container mx-auto px-6" style={{ width: "100%" }}>
        <div
          style={{
            height: "1px",
            width: "3rem",
            backgroundColor: "#D4AF37",
            marginBottom: "2rem",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            height: "5rem",
            width: "55%",
            backgroundColor: "#1c1c1c",
            borderRadius: 2,
            marginBottom: "1.5rem",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            height: "1.5rem",
            width: "35%",
            backgroundColor: "#1c1c1c",
            borderRadius: 2,
            marginBottom: "3rem",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              height: "3rem",
              width: "9rem",
              backgroundColor: "#2a2520",
              borderRadius: 2,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <div
            style={{
              height: "3rem",
              width: "7rem",
              backgroundColor: "#1c1c1c",
              borderRadius: 2,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default async function HeroSection() {
  const heroResponse = await getHeroSectionData();
  const heroSection = heroResponse?.data ?? null;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background image (only if hero section content exists) */}
      {heroSection?.backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${strapiConfig.baseUrl}${heroSection.backgroundImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.02)",
          }}
        />
      )}
      {/* Fallback solid background when no image */}
      {!heroSection?.backgroundImage && (
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#0c0c0c" }} />
      )}

      {/* Multi-layer dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.7) 40%, rgba(12,12,12,0.3) 70%, rgba(12,12,12,0.5) 100%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(12,12,12,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="container mx-auto px-6"
        style={{
          position: "relative",
          zIndex: 10,
          paddingBottom: "5rem",
          paddingTop: "2rem",
          width: "100%",
        }}
      >
        {/* Gold rule + label */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "#D4AF37",
              marginBottom: "1rem",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            República de Angola · Forças Armadas
          </span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 300,
            color: "#F2EDE4",
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
            maxWidth: "18ch",
          }}
        >
          {heroSection?.title ?? "Museu das Forças Armadas de Angola"}
        </h1>

        {/* Subtitle */}
        {heroSection?.subtitle && (
          <p
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#A09080",
              maxWidth: "40ch",
              marginBottom: "3rem",
              lineHeight: 1.7,
            }}
          >
            {heroSection?.subtitle}
          </p>
        )}

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <Link
            href="/agendar-visita"
            className="btn-gold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#0C0C0C",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.5rem",
            }}
          >
            Agendar Visita
          </Link>

          <Link
            href="/galeria"
            className="btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.5rem",
            }}
          >
            Ver Galeria
          </Link>
        </div>

        {/* Bottom scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "3rem",
              background:
                "linear-gradient(to bottom, transparent, #D4AF37)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
