import userController from "../controllers/user.controller";

import { Router } from "express";
const router = Router();

router.use("/user", userController);

export default router;