import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        ime: "",
        email: "",
        mobitel: "",
        lozinka: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Greška:", error);
            alert("Došlo je do greške!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ime:</label>
                <input
                    type="text"
                    name="ime"
                    value={formData.ime}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mobitel:</label>
                <input
                    type="text"
                    name="mobitel"
                    value={formData.mobitel}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Lozinka:</label>
                <input
                    type="password"
                    name="lozinka"
                    value={formData.lozinka}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Registracija</button>
        </form>
    );
};

export default Register;
