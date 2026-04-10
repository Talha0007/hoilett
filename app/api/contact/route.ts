import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  getAdminEmailTemplate,
  getCustomerEmailTemplate,
} from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send to Admin
    await transporter.sendMail({
      from: `"HBS Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `NEW INQUIRY: ${subject} - ${name}`,
      html: getAdminEmailTemplate({ name, email, phone, subject, message }),
    });

    // 2. Send to Customer
    await transporter.sendMail({
      from: `"Hoilett Business Systems" <${process.env.EMAIL_USER}>`,
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
