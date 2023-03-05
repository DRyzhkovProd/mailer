import MailerService  from "../service/mailer.service.js";
import TemplateService from "../service/template.service.js";

const templateService = TemplateService;
const mailService = MailerService;

export class MailerController {
    async sendMail(req, res, next) {
        try {
            const template  = templateService.createMailTemplate(req.body);
            await mailService.sendMail(template);
            res.status(200).json({ message: 'Сообщение успешно отправлено' });
        } catch (error) {
            res.status(500).json({ message: 'Внутренняя ошибка сервера' });
            next(error);
        }
    }
}
