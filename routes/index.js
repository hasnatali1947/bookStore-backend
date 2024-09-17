import express from "express";
import userRoute from "./userRoute.js";
import bookListRoute from "./bookListRoute.js"

const router = express.Router();

router.use("/user", userRoute);
router.use("/bookList", bookListRoute);

export default router;
