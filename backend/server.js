import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import nationalIDRoutes from "./routes/nationalID.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.use("/api/", nationalIDRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
