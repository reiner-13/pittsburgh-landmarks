const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../server/.env")});
const express = require("express");
const cors = require("cors");
const db = require("./db");
const groq = require('groq-sdk');
const app = express();

app.use(cors());
app.use(express.json());
const groqClient = new groq.Groq({
    apiKey: process.env["GROQ_API_KEY"]
});

// Get all Landmarks
app.get("/api/v1/landmarks", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM landmarks");
        const { name } = req.query;
        let landmarks = results.rows;

        if (name) {
            landmarks = landmarks.filter(landmark =>
                landmark.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        res.status(200).json({
            status: "success",
            results: landmarks.length,
            data: {
                landmarks: landmarks
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

// Get one Landmark by id
app.get("/api/v1/landmarks/:id", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM landmarks WHERE id=$1", [req.params.id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                landmarks: results.rows[0]
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

// Get generated landmark info by id using Llama 3 on Groq cloud service
app.get("/api/v1/landmarks/:id/info", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM landmarks WHERE id=$1", [req.params.id]);
        const landmarkName = results.rows[0].name;
        const modelName = 'llama-3.2-90b-vision-preview';
        const chatCompletion = await groqClient.chat.completions.create({
            // The model generates HTML-formatted descriptions based on the prompt
            messages: [{ role: 'user', content: `Tell me about ${landmarkName} in Pittsburgh, PA. Narrow it down to 5 or fewer bullet points (<ul> and <li>) and do not responsd with fake/unsure facts. Format the response as HTML. Do not wrap everything in anchor. Start with a header (h1) as the name of the place.` }],
            model: modelName,
        });
        res.status(200).json({
            status: "success",
            data: {
                model: modelName,
                response: chatCompletion.choices[0].message.content
            }
        });
    }
    catch (err) {
        console.log(err);
    }
});


// Create a Landmark
app.post("/api/v1/landmarks", async (req, res) => {
    try {
        const results = await db.query("INSERT INTO landmarks (name, address) VALUES ($1, $2) RETURNING *", [req.body.name, req.body.address]);
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                landmarks: results.rows[0]
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

// Update a Landmark
app.put("/api/v1/landmarks/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE landmarks SET name=$1, address=$2 WHERE id=$3 RETURNING *", [req.body.name, req.body.address, req.params.id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                landmarks: results.rows[0]
            }
        });
    }
    catch (err) {
        console.log(err);
    }
});

// Delete a Landmark
app.delete("/api/v1/landmarks/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM landmarks WHERE id=$1", [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

