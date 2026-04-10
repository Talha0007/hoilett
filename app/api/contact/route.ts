import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  getAdminEmailTemplate,
  getCustomerEmailTemplate,
} from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // UPDATED FOR MXTHUNDER
    const transporter = nodemailer.createTransport({
      host: "smtp.mxthunder.net", // From the image
      port: 587, // From the image
      secure: false, // false for port 587 (STARTTLS)
      auth: {
        user: process.env.EMAIL_USER, // The username/domain from the image
        pass: process.env.EMAIL_PASS, // The password from the image
      },
      tls: {
        // This ensures the connection uses the 'starttls' mentioned in the image
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // 1. Send to Admin
    await transporter.sendMail({
      from: `"HBS Contact Form" <${process.env.ADMIN_EMAIL}>`, // Use the domain email
      to: process.env.ADMIN_EMAIL, // Or your process.env.ADMIN_EMAIL
      subject: `NEW INQUIRY: ${subject} - ${name}`,
      html: getAdminEmailTemplate({ name, email, phone, subject, message }),
    });

    // 2. Send to Customer
    await transporter.sendMail({
      from: `"Hoilett Business Systems" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "We've received your inquiry - HBS Support",
      html: getCustomerEmailTemplate(name),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch message" },
      { status: 500 },
    );
  }
}
