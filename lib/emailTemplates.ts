export const getAdminEmailTemplate = (data: any) => `
  <div style="font-family: sans-serif; padding: 40px; background-color: #f8fafc; color: #001f3f;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #e2e8f0;">
      <h2 style="text-transform: uppercase; font-weight: 900; letter-spacing: -1px; font-style: italic; margin-bottom: 24px;">
        New <span style="color: #3a86ff;">Inquiry</span> Received
      </h2>
      <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
      <div style="font-size: 14px; line-height: 1.6;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-top: 10px;">${data.message}</div>
      </div>
    </div>
  </div>
`;

export const getCustomerEmailTemplate = (name: string) => `
  <div style="font-family: sans-serif; padding: 40px; background-color: #f8fafc; color: #001f3f;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 24px; padding: 40px; border: 1px solid #e2e8f0; text-align: center;">
      <h1 style="text-transform: uppercase; font-weight: 900; letter-spacing: -1px; font-style: italic; margin-bottom: 8px;">
        HBS <span style="color: #3a86ff;">Support</span>
      </h1>
      <p style="text-transform: uppercase; font-size: 10px; font-weight: bold; tracking: 2px; color: #94a3b8; margin-bottom: 30px;">Dispatch Acknowledgement</p>
      <div style="text-align: left; font-size: 15px; line-height: 1.6;">
        <p>Hello ${name},</p>
        <p>We've successfully received your inquiry. A technical specialist from <strong>Hoilett Business Systems</strong> is reviewing your requirements.</p>
        <p><strong>Standard Response Time:</strong> Under 2 Hours</p>
        <div style="margin-top: 30px; padding: 20px; background: #3a86ff; color: white; border-radius: 16px; text-align: center;">
          Your request is now in our priority queue.
        </div>
      </div>
    </div>
  </div>
`;
