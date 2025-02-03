const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// cutekesh21
// 2SqB4Jqevej5g6sU
// mongodb+srv://cutekesh21:2SqB4Jqevej5g6sU@cluster0.cn0d7.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
