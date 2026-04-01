import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";
import fs from "fs";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_ORIGIN
          ? [process.env.FRONTEND_ORIGIN]
          : true
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../frontend/dist");
  const indexHtmlPath = path.join(distPath, "index.html");

  if (fs.existsSync(indexHtmlPath)) {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(indexHtmlPath);
    });
  } else {
    console.log("Frontend build not found. Skipping static file serving.");
  }
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
