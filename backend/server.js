import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import nationalIDRoutes from "./routes/nationalID.routes.js";

const app = express();
app.use(express.json());
app.use(cors());



dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/", nationalIDRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
