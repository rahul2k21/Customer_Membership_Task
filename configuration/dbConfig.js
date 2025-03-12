const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://rahulmandal2k21:uZ9Q3Q7XWIKeGwlI@test-pro-db.hilzz.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db&tls=true";

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}; 

module.exports = connectDB;

