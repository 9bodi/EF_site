import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prenom, nom, email, telephone, role, demande, message } = body;

  if (!email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }

  try {
    const parts = [
      `userAccessToken=${encodeURIComponent(process.env.ETARGET_USER_TOKEN!)}`,
      `campaignAccessToken=${encodeURIComponent(process.env.ETARGET_CAMPAIGN_TOKEN!)}`,
      `recipientEmailAddress=${encodeURIComponent(email)}`,
      `customTagsList%5BPRENOM%5D=${encodeURIComponent(prenom || "")}`,
      `customTagsList%5BNOM%5D=${encodeURIComponent(nom || "")}`,
      `customTagsList%5BTELEPHONE%5D=${encodeURIComponent(telephone || "")}`,
      `customTagsList%5BROLE%5D=${encodeURIComponent(role || "")}`,
      `customTagsList%5BDEMANDE%5D=${encodeURIComponent(demande || "")}`,
      `customTagsList%5BMESSAGE%5D=${encodeURIComponent(message || "")}`,
    ];

    const rawBody = parts.join("&");

    const response = await fetch("https://api.etarget-emailing.com/callMe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: rawBody,
    });

    const result = await response.text();
    console.log("eTarget contact response:", result);

    return NextResponse.json({ success: true, etarget: result });
  } catch (error) {
    console.error("Erreur envoi contact eTarget:", error);
    return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
  }
}
