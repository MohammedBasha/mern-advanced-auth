import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
        user: "e53d0c26da2ede",
        pass: "0795440e15df5c",
    },
});
