import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .email({ message: "Παρακαλώ εισάγετε ένα έγκυρο email." })
    .trim()
    .min(1, { message: "Το email είναι υποχρεωτικό." }),

  message: z
    .string()
    .trim()
    .min(10, {
      message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.",
    })
    .max(1000, {
      message: "Το μήνυμα δεν μπορεί να ξεπερνά τους 1000 χαρακτήρες.",
    }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = formSchema.parse(body);

    // Check for environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
      process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      if (process.env.NODE_ENV === "development") {
        console.warn("SMTP not configured. Development mode simulation.");
        console.log("Email received:", email);
        console.log("Message received:", message);

        return NextResponse.json({
          success: true,
          message: "Message received (development simulation)",
        });
      }

      console.error("SMTP environment variables missing in production");

      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production", // Allow self-signed certificates in development
      },
    });

    // Email to business
    const businessMailOptions = {
      from: `"Web.Smarting.gr Contact" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      subject: `Νέο ενδιαφέρον από ${email}`,
      text: `
        Νέο ενδιαφέρον από Web.Smarting.gr

        Email: ${email}

        Μήνυμα:
        ${message}
      `,
      html: `
  <div style="
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 24px;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      overflow: hidden;
    ">
      <div style="
        background: linear-gradient(135deg, #2563eb, #1e40af);
        padding: 20px 24px;
      ">
        <h2 style="
          margin: 0;
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
        ">
          New Contact Request
        </h2>
        <p style="
          margin: 4px 0 0;
          color: #dbeafe;
          font-size: 14px;
        ">
          web.smarting.gr
        </p>
      </div>

      <div style="padding: 24px;">
        <div style="margin-bottom: 12px;">
          <strong style="color: #374151;">Email:</strong>
          <span style="color: #111827;"> ${email}</span>
        </div>

        <div style="
          border-top: 1px solid #e5e7eb;
          padding-top: 16px;
        ">
          <p style="
            margin: 0 0 8px;
            font-weight: 600;
            color: #374151;
          ">
            Message
          </p>
          <p style="
            margin: 0;
            color: #111827;
            line-height: 1.6;
            white-space: normal;
          ">
            ${message.replace(/\n/g, "<br/>")}
          </p>
        </div>
      </div>
    </div>

    <p style="
      text-align: center;
      margin-top: 16px;
      font-size: 12px;
      color: #6b7280;
    ">
      This email was generated automatically from web.smarting.gr
    </p>
  </div>
`,
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: `"web.smarting.gr" <${SMTP_USER}>`,
      to: email,
      subject: "Ευχαριστούμε για το ενδιαφέρον σας - web.smarting.gr",
      text: `
        Αγαπητέ/ή ${email},

        Σας ευχαριστούμε για το ενδιαφέρον σας!

        Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.

        Με εκτίμηση,
        Η ομάδα της web.smarting.gr

        ---
        Αυτό είναι ένα αυτόματο μήνυμα επιβεβαίωσης. Παρακαλούμε μην απαντήσετε σε αυτό το email.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #0B3D59; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #00ADB5; margin: 0;">web.smarting.gr</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0B3D59;">Αγαπητέ/ή ${email},</h2>
            <p style="color: #333; line-height: 1.6;">
              Σας ευχαριστούμε για το ενδιαφέρον σας!
            </p>
            <p style="color: #333; line-height: 1.6;">
              Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Με εκτίμηση,<br/>
                Η ομάδα της web.smarting.gr
              </p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00ADB5; border-radius: 4px;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                <em>Αυτό είναι ένα αυτόματο μήνυμα επιβεβαίωσης. Παρακαλούμε μην απαντήσετε σε αυτό το email.</em>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
