import { NextRequest, NextResponse } from 'next/server';

const SCHOOL_EMAIL = 'frozenschools.mountain24@gmail.com';
const SENDGRID_API_URL = 'https://api.sendgrid.com/v3/mail/send';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      guardianName,
      childName,
      phone,
      email,
      grade,
      preferredDate,
      preferredTime,
      message,
    } = body;

    if (!guardianName || !childName || !phone || !grade) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL || SCHOOL_EMAIL;

    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Admission Application</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a3a5c 0%,#2d6a9f 100%);padding:40px 40px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:rgba(255,255,255,0.7);letter-spacing:2px;text-transform:uppercase;font-weight:600;">Frozen Mountain School</p>
              <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">New Admission Application</h1>
              <p style="margin:12px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">A parent has submitted an interest form via the school website</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">

              <!-- Student Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:14px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#2d6a9f;letter-spacing:1.5px;text-transform:uppercase;border-bottom:2px solid #e8f0f8;padding-bottom:8px;">Student Information</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding:0 8px 16px 0;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #2d6a9f;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Child's Name</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${childName}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 16px 8px;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #2d6a9f;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Grade Applying For</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${grade}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Parent Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:14px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#2d6a9f;letter-spacing:1.5px;text-transform:uppercase;border-bottom:2px solid #e8f0f8;padding-bottom:8px;">Parent / Guardian Details</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding:0 8px 16px 0;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #e8a020;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Full Name</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${guardianName}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 16px 8px;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #e8a020;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone Number</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${phone}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:0 0 16px 0;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #e8a020;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email Address</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${email || 'Not provided'}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Interview Preference -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:14px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#2d6a9f;letter-spacing:1.5px;text-transform:uppercase;border-bottom:2px solid #e8f0f8;padding-bottom:8px;">Interview Preference</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding:0 8px 16px 0;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #16a34a;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Preferred Date</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${preferredDate || 'Flexible'}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 16px 8px;vertical-align:top;">
                          <div style="background:#f8fafc;border-radius:10px;padding:14px 16px;border-left:3px solid #16a34a;">
                            <p style="margin:0 0 4px;font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Preferred Time</p>
                            <p style="margin:0;font-size:15px;color:#1a3a5c;font-weight:700;">${preferredTime || 'Flexible'}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${message ? `
              <!-- Additional Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#2d6a9f;letter-spacing:1.5px;text-transform:uppercase;border-bottom:2px solid #e8f0f8;padding-bottom:8px;">Additional Message</p>
                    <div style="background:#fffbeb;border-radius:10px;padding:16px;border:1px solid #fde68a;">
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Action Banner -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#e8f4fd 0%,#dbeafe 100%);border-radius:12px;padding:20px 24px;border:1px solid #bfdbfe;">
                    <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#1a3a5c;">📋 Next Steps</p>
                    <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">Please contact the parent at <strong>${phone}</strong>${email ? ` or <strong>${email}</strong>` : ''} to confirm the interview date and provide further instructions about the official admission process.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#6b7280;">This email was sent automatically from the Frozen Mountain School website.</p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">© ${new Date().getFullYear()} Frozen Mountain School · Moshi, Tanzania</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const plainText = `
NEW ADMISSION APPLICATION — FROZEN MOUNTAIN SCHOOL
====================================================

STUDENT INFORMATION
-------------------
Child's Name:       ${childName}
Grade Applying For: ${grade}

PARENT / GUARDIAN DETAILS
--------------------------
Full Name:    ${guardianName}
Phone Number: ${phone}
Email:        ${email || 'Not provided'}

INTERVIEW PREFERENCE
--------------------
Preferred Date: ${preferredDate || 'Flexible'}
Preferred Time: ${preferredTime || 'Flexible'}

${message ? `ADDITIONAL MESSAGE\n------------------\n${message}\n\n` : ''}
====================================================
Submitted via Frozen Mountain School Website
    `.trim();

    const payload = {
      personalizations: [
        {
          to: [{ email: SCHOOL_EMAIL, name: 'Frozen Mountain School' }],
          subject: `New Admission Application — ${childName} (${grade})`,
        },
      ],
      from: {
        email: fromEmail,
        name: 'Frozen Mountain School Website',
      },
      reply_to: email
        ? { email, name: guardianName }
        : { email: SCHOOL_EMAIL, name: 'Frozen Mountain School' },
      content: [
        { type: 'text/plain', value: plainText },
        { type: 'text/html', value: htmlContent },
      ],
    };

    const response = await fetch(SENDGRID_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', response.status, errorText);
      return NextResponse.json(
        { error: `Failed to send email: ${response.status}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
