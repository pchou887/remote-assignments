import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mainRoutes from "./routes/index.js";
import authRoutes from "./routes/auth.js";
import memberRoutes from "./routes/member.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.use("/", mainRoutes);
app.use("/", authRoutes);
app.use("/member", memberRoutes);

app.listen(8000, () => {
  console.log("Sever is running on port 8000");
});
