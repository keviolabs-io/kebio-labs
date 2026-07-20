import { Resend } from "resend";

/** Adresse de réception des demandes (configurable via variable d'env). */
const TO = process.env.CONTACT_EMAIL || "hello@keviolabs.com";
/** Expéditeur : domaine keviolabs.com vérifié chez Resend. */
const FROM = process.env.CONTACT_FROM || "Kevio Labs <hello@keviolabs.com>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Service email non configuré." },
      { status: 500 }
    );
  }

  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const company = (data.company || "").trim();
  const projectType = (data.projectType || "").trim();
  const budget = (data.budget || "").trim();
  const message = (data.message || "").trim();

  // Champs obligatoires
  if (!name || !email || !projectType) {
    return Response.json(
      { error: "Merci de remplir les champs obligatoires." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Email invalide." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Prénom & Nom", name],
    ["Email", email],
    ["Téléphone", phone || "—"],
    ["Entreprise", company || "—"],
    ["Type de projet", projectType],
    ["Budget estimé", budget || "—"],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 16px">Nouvelle demande de contact</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(
                v
              )}</strong></td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#666">Message :</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(message || "—")}</p>
    </div>`;

  const text = [
    ...rows.map(([k, v]) => `${k} : ${v}`),
    "",
    `Message :\n${message || "—"}`,
  ].join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Nouvelle demande — ${name} (${projectType})`,
      html,
      text,
    });
    if (error) {
      return Response.json(
        { error: "L'envoi a échoué, réessayez." },
        { status: 502 }
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "L'envoi a échoué, réessayez." },
      { status: 502 }
    );
  }
}
