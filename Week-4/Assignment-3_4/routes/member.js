import express from "express";
import { member, logout } from "../controllers/member.js";
const router = express.Router();

router.get("/", member);
router.post("/logout", logout);

export default router;
