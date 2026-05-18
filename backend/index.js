// import libraries
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import database connection
import { connectDB } from "./db/connectDB.js";

// Import routes
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectDB();
});
