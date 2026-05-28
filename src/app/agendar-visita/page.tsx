import { ContactHelp } from "@/components/visits/contact-help";
import { ImportantInfo } from "@/components/visits/important-info";
import { OpeningHours } from "@/components/visits/opening-hours";
import { ScheduleVisitForm } from "@/components/visits/schedule-visit-form";
import {
  getContact,
  getImportantInfo,
  getOpeningHours,
} from "@/lib/strapi/services/museum-info";

export default async function ScheduleVisitPage() {
  const [
    getContactResponse,
    getImportantInfoResponse,
    getOpeningHoursResponse,
  ] = await Promise.all([getContact(), getImportantInfo(), getOpeningHours()]);
  const contact = getContactResponse?.data ?? null;
  const { data: importantInfo } = getImportantInfoResponse;
  const { data: openingHours } = getOpeningHoursResponse;

  return (
    <>
      {/* Hero — crimson with gold rule */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#6B0000",
          padding: "5rem 0",
          overflow: "hidden",
        }}
      >
        {/* Gold top line */}
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
        {/* Gold bottom line */}
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
        {/* Subtle texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container mx-auto px-6"
          style={{ position: "relative", zIndex: 1 }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.7)",
              marginBottom: "1.25rem",
            }}
          >
            Museu das Forças Armadas · Luanda
          </span>
          <h1
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "#F2EDE4",
              letterSpacing: "0.01em",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Agendar Visita
          </h1>
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "rgba(212,175,55,0.5)",
              marginBottom: "1rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              color: "rgba(242,237,228,0.6)",
              textTransform: "uppercase",
            }}
          >
            Planeie a sua visita ao Museu das Forças Armadas de Angola
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: "#f8f7f5", padding: "5rem 0" }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form — 2 of 3 columns */}
            <div className="lg:col-span-2">
              <ScheduleVisitForm />
            </div>

            {/* Sidebar — 1 of 3 columns */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <OpeningHours openingHours={openingHours} />
              {importantInfo.length > 0 && (
                <ImportantInfo information={importantInfo} />
              )}
              {contact && (
                <ContactHelp
                  email={contact.email}
                  phoneNumber={contact.phoneNumber}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
