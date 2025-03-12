const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    contactNumber: { type: String, required: true },
    status: { type: String, enum: ["Gold", "Diamond"], required: true },
    membershipID: { type: mongoose.Schema.Types.ObjectId, ref: "Membership", required: true }
});

module.exports = mongoose.model("Customer", CustomerSchema);
