import { Router } from "express";
import controllers from "./songs.controller";

const router = Router();

// /api/list
router.route("/").get(controllers.getSongs);
router.route("/:term").get(controllers.getSongs);

export default router;
