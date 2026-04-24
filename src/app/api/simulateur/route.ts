import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, soldeEstime } = body;

  if (!email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }

  try {
    const parts = [
      `userAccessToken=${encodeURIComponent(process.env.ETARGET_USER_TOKEN!)}`,
      `campaignAccessToken=${encodeURIComponent(process.env.ETARGET_CAMPAIGN_TOKEN!)}`,
      `recipientEmailAddress=${encodeURIComponent(email)}`,
      `customTagsList%5BSOLDE%5D=${encodeURIComponent(soldeEstime)}`,
    ];

    const rawBody = parts.join("&");

    const response = await fetch("https://api.etarget-emailing.com/callMe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: rawBody,
    });

    const result = await response.text();
    console.log("eTarget response:", result);

    return NextResponse.json({ success: true, etarget: result });
  } catch (error) {
    console.error("Erreur envoi eTarget:", error);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
