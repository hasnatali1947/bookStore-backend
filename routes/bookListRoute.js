import express from "express";
import bookListController from "../controllers/bookListController.js"

const router = express.Router();

router.put("/updateBooks", bookListController.updateBooks)
router.get("/getBooks", bookListController.getBooks)
router.put("/deleteBooks", bookListController.deleteBooks)

export default router