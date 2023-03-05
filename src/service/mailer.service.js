import getMailerConfig from "../config/mail.config.js";

const mailerService = getMailerConfig();

class MailerService {
    _mailerService = getMailerConfig()

    async sendMail(data) {
        try {
            return await this._mailerService.sendMail(data)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new MailerService();
