import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Message from Portfolio",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #111; color: #eee; padding: 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #1a1a1a; border: 1px solid #444; border-radius: 10px;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="color: #e11d48; border-bottom: 2px solid #e11d48; padding-bottom: 10px; margin-bottom: 20px;">
                    🛡️ Encrypted Message Received
                  </h2>
                  <p style="margin: 10px 0; font-size: 16px;">
                    <strong style="color: #ccc;">Name:</strong><br />
                    <span style="color: #fff;">${name}</span>
                  </p>
                  <p style="margin: 10px 0; font-size: 16px;">
                    <strong style="color: #ccc;">Email:</strong><br />
                    <span style="color: #fff;">${email}</span>
                  </p>
                  <p style="margin: 10px 0; font-size: 16px;">
                    <strong style="color: #ccc;">Message:</strong><br />
                    <span style="color: #fff;">${message}</span>
                  </p>

                  <hr style="margin: 30px 0; border-color: #333;" />

                  <p style="font-size: 14px; color: #999;">
                    This message was submitted through your Money Heist-themed portfolio contact form.
                  </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return Response.json({ success: false, error: "Email send failed" }, { status: 500 });
  }
}
