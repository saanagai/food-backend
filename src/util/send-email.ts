import nodemailer from "nodemailer";
const sendEmail = async (Email: string, token: string) => {
  const mailSecret = process.env.EMAIL_SECRET;
  const mail = process.env.MAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp.exemple.com",
    port: 587,
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });
  const mailOption = {
    from: "No nom foods",
    to: Email,
    subject: "Reset your password",
    html: `<h1>Your password reset link</h1>
    <a href="localhost:3000/reset-password?id=${token}">click here</a>`,
  };
  await transporter.sendMail(mailOption);
};
