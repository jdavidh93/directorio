import express from "express";
import contact from "../controllers/contact.js";

const router = express.Router();

router.post("/addContact", contact.addContact);
router.get("/listContact", contact.listContact);
router.delete("/deleteContact/:_id", contact.deleteContact);

export default router;