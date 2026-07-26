import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, or message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact API error: RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is currently unconfigured. Please set RESEND_API_KEY in your environment variables (.env.local).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const toEmail = process.env.RESEND_TO_EMAIL || "syedfaiezahmed@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Portfolio Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0c10; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #60a5fa; border-b: 1px solid #1e293b; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p style="margin-top: 15px;"><strong>From Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #1e293b; border-left: 4px solid #60a5fa; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; color: #e2e8f0;">${message}</p>
          </div>
          <p style="margin-top: 25px; font-size: 12px; color: #94a3b8;">Sent via Syed Faiez Ahmed Portfolio Contact Form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to deliver email through Resend API." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact API server error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "An internal server error occurred while sending email." },
      { status: 500 }
    );
  }
}