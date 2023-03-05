import { Router } from "express";
import { MailerController } from "../controller/mailer.controller.js";

const router = new Router();
const mailController = new MailerController();
router.post('/send', mailController.sendMail);

export default router;
