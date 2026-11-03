import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB and store data
    const db = await connectToMongoDB();
    const contactCollection = db.collection("contact");
    const result = await contactCollection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const logoUrl = "https://prokagno.co.in/logo.png";

    // Create separate HTML templates for admin and user emails
    const adminTemplate = `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #eee;">
                        <div style="background-color: white; padding: 20px; text-align: center;">
                                <img src="${logoUrl}" alt="Logo" style="max-height: 70px;" />
                        </div>
                        <div style="background-color: white; padding: 30px;">
                                <h2 style="color: #FF8C00; margin-top: 0;">New Contact Form Submission</h2>
                                <p style="color: #555; margin-bottom: 25px;">You have received a new message from your website contact form.</p>
                                <div style="background-color: #fff8f0; border-left: 4px solid #FF8C00; padding: 15px; margin: 20px 0;">
                                        <p style="margin: 8px 0;"><strong style="color: #444;">Name:</strong> ${name}</p>
                                        <p style="margin: 8px 0;"><strong style="color: #444;">Email:</strong> ${email}</p>
                                        <p style="margin: 12px 0 8px;"><strong style="color: #444;">Message:</strong></p>
                                        <p style="margin: 0; line-height: 1.6; color: #555;">${message}</p>
                                </div>
                                <p style="color: #777; font-size: 14px; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                                        This is an automated notification.
                                </p>
                        </div>
                </div>
        `;

    const userTemplate = `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border:.5px solid #eee;">
                        <div style="background-color: white; padding: 20px; text-align: center;">
                                <img src="${logoUrl}" alt="Logo" style="max-height: 70px;" />
                        </div>
                        <div style="background-color: white; padding: 30px;">
                                <h2 style="color: #FF8C00; margin-top: 0; text-align: center;">Thank You for Contacting Us!</h2>
                                <p style="color: #555; line-height: 1.6; margin-bottom: 25px; text-align: center;">
                                        We have received your message and will get back to you as soon as possible.
                                </p>
                                <div style="background-color: #fff8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
                                        <p style="margin: 8px 0;"><strong style="color: #444;">Your Name:</strong> ${name}</p>
                                        <p style="margin: 8px 0;"><strong style="color: #444;">Your Email:</strong> ${email}</p>
                                        <p style="margin: 12px 0 8px;"><strong style="color: #444;">Your Message:</strong></p>
                                        <p style="margin: 0; line-height: 1.6; color: #555;">${message}</p>
                                </div>
                                <p style="color: #777; font-size: 14px; text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                                        This is an automated confirmation. Please do not reply to this email.
                                </p>
                        </div>
                </div>
        `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: adminTemplate,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_ID,
      to: email,
      subject: "Thank you for contacting us",
      html: userTemplate,
    });

    return NextResponse.json(
      { message: "Contact created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
