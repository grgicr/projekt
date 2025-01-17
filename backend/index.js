require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "aplikacija",
});

db.connect((err) => {
    if (err) {
        console.error("Greška pri povezivanju sa bazom:", err);
    } else {
        console.log("Uspješno povezano s bazom!");
    }
});

app.post("/register", async (req, res) => {
    const { ime, email, mobitel, lozinka } = req.body;

    if (!ime || !email || !lozinka) {
        return res.status(400).json({ message: "Sva polja su obavezna!" });
    }

    try {
        const [userExists] = await db.promise().query(
            "SELECT email FROM korisnici WHERE email = ?",
            [email]
        );

        if (userExists.length > 0) {
            return res.status(400).json({ message: "Email već postoji!" });
        }

        const hashedPassword = await bcrypt.hash(lozinka, 10);


        await db.promise().query(
            "INSERT INTO korisnici (ime, email, mobitel, lozinka) VALUES (?, ?, ?, ?)",
            [ime, email, mobitel || null, hashedPassword]
        );

        res.status(201).json({ message: "Registracija uspješna!" });
    } catch (err) {
        console.error("Greška:", err);
        res.status(500).json({ message: "Greška pri registraciji." });
    }
});

app.listen(5000, () => {
    console.log("Server pokrenut na portu 5000");
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Ruta /register je aktivna!');
});

