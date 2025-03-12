const express = require("express");
const cors = require("cors");
const connectDB = require("./configuration/dbConfig");
const customerRoutes = require("./routes/customerRouter");
const membershipRouter = require("./routes/membershipRouter");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/memberships", membershipRouter);

const PORT = 1000; // Hardcoded port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
