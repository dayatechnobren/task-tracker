import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.get("/api/tasks", (req, res) => {
  res.json([
    { id: uuidv4(), title: "First Task" },
    { id: uuidv4(), title: "Second Task" }
  ]);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server live at http://localhost:${PORT}`));
