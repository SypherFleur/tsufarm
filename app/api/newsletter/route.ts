// Newsletter signup route.
// Sends a notification email to Tsucommunityfarm@gmail.com via Resend,
// then optionally adds the subscriber to ConvertKit if keys are configured.
//
// Required env var:
//   RESEND_API_KEY  - from https://resend.com/api-keys
//
// Optional env vars (for ConvertKit list integration):
//   CONVERTKIT_API_KEY
//   CONVERTKIT_FORM_ID

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // Send notification to farm email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "TSU Farm Newsletter <onboarding@resend.dev>",
        to: "Tsucommunityfarm@gmail.com",
        subject: "New Newsletter Signup",
        text: `New newsletter signup:\n\n${email}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #2D5016;">New Newsletter Signup</h2>
            <p style="color: #3E2723;">Someone just signed up for the TSU Community Farm newsletter:</p>
            <p style="font-size: 18px; font-weight: bold; color: #3E2723;">${email}</p>
          </div>
        `,
      });
    }

    // Optionally add to ConvertKit if configured
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (apiKey && formId) {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        }
      );
      if (!res.ok) {
        const data = await res.json();
        console.error("ConvertKit error:", data);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
