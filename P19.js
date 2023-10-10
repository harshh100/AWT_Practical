const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_MAILER,
        pass: process.env.EMAIL_PASS,
    },
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Email Subscription</h1>
        <form method="POST" action="/subscribe">
            <label>Email:</label>
            <input type="email" name="email" required>
            <button type="submit">Subscribe</button>
        </form>
    `);
});

app.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_MAILER,
        to: email,
        subject: "Welcome to Our Newsletter",
        text: "Thank you for subscribing to our newsletter!",
    };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).send("Subscribed successfully.")
    } catch (error) {
            console.warn(error);
        return res.status(500).send("Some error occured.")
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
