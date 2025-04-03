const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Test route
app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

// Route to calculate price based on answers
const calculatePrice = (totalPoints) => {
    if (totalPoints <=6) return 7000;
    if (totalPoints >= 7 && totalPoints <= 11) return 15000;
    return 30000;
}

app.post('/calculate-price', (req, res) => {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length !== 5) {
        return res.status(400).json({ error: "Invalid input, must provide 5 answers" });
    }
    const points = answers.reduce((total, answer) => {
        if (answer === "low") return total + 1;
        if (answer === "medium") return total + 2;
        if (answer === "high") return total + 3;
        return total;
    }, 0);
    const price = calculatePrice(points);
    res.json({ totalPoints: points, price });
});
// Middleware to check MongoDB connection
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(500).json({ error: "Database connection lost" });
  }
  next();
});
// Connect to MongoDB
const dbURI = 'mongodb+srv://rpsevodska:9qYnvidVQit6LCkD@cluster0.iqt83ff.mongodb.net/electromagnet-db?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Failed to connect to MongoDB Atlas:", err));

// Create a Contact schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Route: Contact Form (Save to Database)
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save(); // Save the contact details to MongoDB
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save contact form" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
