"use server";

export type CreateVisitPayload = {
  fullName: string;
  email: string;
  phoneNumber: string;
  visitDateTime: string; // ISO 8601 — e.g. "2026-06-15T10:00:00.000Z"
  visitorsCount: number;
  additionalInformation?: string;
};

/**
 * Submits a visit booking to the Strapi CMS.
 *
 * ⚠️  Before this works, enable the `create` permission in Strapi Admin:
 *   Settings → Users & Permissions → Roles → Public → Visit → ✓ create → Save
 */
export async function createVisit(payload: CreateVisitPayload): Promise<void> {
  const res = await fetch(`${process.env.STRAPI_BASE_URL}/api/visits`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: payload }),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      // biome-ignore lint/suspicious/noExplicitAny: strapi error shape
      (body as any)?.error?.message ?? "Erro ao submeter agendamento";
    throw new Error(message);
  }
}
