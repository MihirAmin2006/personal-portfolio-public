import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST for actual email sending
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Email options for you (recipient)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <head>
          <meta charset="UTF-8">
          <title>New Contact Message</title>
          <style>
            body {
              background: #f3f4f6;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 25px rgba(0,0,0,0.08);
              border: 1px solid #e0e0e0;
            }
            .header {
              background: linear-gradient(135deg, #4f46e5, #6366f1);
              color: white;
              padding: 30px 20px;
              text-align: center;
            }
            .header h2 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px 25px;
              color: #333;
            }
            .section {
              margin-bottom: 20px;
            }
            .label {
              font-weight: 600;
              font-size: 14px;
              color: #555;
              margin-bottom: 5px;
            }
            .value {
              background: #f9fafb;
              padding: 12px 15px;
              border-radius: 8px;
              font-size: 15px;
              border: 1px solid #e5e7eb;
            }
            .footer {
              background-color: #f9fafb;
              text-align: center;
              padding: 20px;
              font-size: 13px;
              color: #888;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>

        <div class="container">
          <div class="header">
            <h2>📬 You've Got a New Message!</h2>
            <p>Someone reached out through your contact form</p>
          </div>
          <div class="content">
            <div class="section">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="section">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>

            <div class="section">
              <div class="label">Subject:</div>
              <div class="value">${subject}</div>
            </div>

            <div class="section">
              <div class="label">💬 Message:</div>
              <div class="value">${message}</div>
            </div>
          </div>
          <div class="footer">
            🚀 Sent from your website | Reply soon and make a connection!
          </div>
        </div>

        </body>
      `
    };

    // Email options for the client (confirmation email)
    const mailClientOption = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me, ${name}`,
      html: `
        <head>
        <meta charset="UTF-8">
        <title>Thanks for Reaching Out!</title>
        <style>
          body {
            background: #f0f4f8;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.07);
          }
          .header {
            background: linear-gradient(135deg, #06b6d4, #3b82f6);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px 25px;
            color: #333;
            line-height: 1.6;
          }
          .btn {
            display: inline-block;
            margin-top: 25px;
            background-color: #3b82f6;
            color: white;
            padding: 12px 25px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
          }
          .footer {
            background-color: #f9fafb;
            text-align: center;
            padding: 20px;
            font-size: 13px;
            color: #777;
            border-top: 1px solid #e5e7eb;
          }
        </style>
      </head>
      <body>

      <div class="container">
        <div class="header">
          <h2>🤝 Thank You, ${name}!</h2>
          <p>Your message has been received.</p>
        </div>
        <div class="content">
          <p>Thank you for reaching out through my portfolio website!</p>
          <p>I've received your message and will get back to you as soon as possible. Here's a quick summary of what you submitted:</p>

          <strong>Subject:</strong> ${subject}</p>
          <p><strong>Email:</strong> ${email}<br>
          <strong>Your Message:</strong> ${message}</p>

          <p>In the meantime, feel free to explore more of my work or connect with me on social media.</p>
          <table cellpadding="0" cellspacing="0" style="margin-top: 15px;">
            <tr>
              <td style="padding-right: 10px;">
                <a href="#" target="_blank" style="text-decoration: none;">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" width="32" height="32" style="display: block;">
                </a>
              </td>
              <td style="padding-right: 10px;">
                <a href="#" target="_blank" style="text-decoration: none;">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width="32" height="32" style="display: block;">
                </a>
              </td>
              <td>
                <a href="#" target="_blank" style="text-decoration: none;">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" width="32" height="32" style="display: block;">
                </a>
              </td>
            </tr>
          </table>

          <a style="color: white" href="#" class="btn">Visit My Website</a>
        </div>
        <div class="footer">
          This is an automated message. If you have questions, reply to this email.<br>
        </div>
      </div>

      </body>
      `
    };

    try {
      // Send email to you
      await transporter.sendMail(mailOptions);
      
      // Send confirmation email to the client
      await transporter.sendMail(mailClientOption);
      
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error in email handler:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}