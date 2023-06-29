import * as apiController from "../controller/apiController.js";
import { Router } from "express";
import Auth from "../middleware/auth.js";

const router = Router();

// auth
router.post("/register", apiController.register);
router.post("/login", apiController.login);

// diskusi
router.get("/diskusi", Auth, apiController.getDiskusi);
router.post("/diskusi", Auth, apiController.postDiskusi);

export default router;
