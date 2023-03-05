import  { randomUUID } from 'crypto'
class TemplateService {
    createMailTemplate (data) {
        if (!data.name || !data.phone || !data.year) throw new Error('Отсутствуют данные для шаблона')
        const ticket = randomUUID();
        return {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: `${process.env.MAIL_SUBJECT} ${ticket}`,
            html: `
                <h1>Номер заявки: ${ticket}</h1>
                <p>Имя: ${data.name}</p>
                <p>Телефон: ${data.phone}</p>
                <p>Телеграм: ${data?.telegram}</p>
                <p>Год: ${data.year}</p>
            `
        };
    }
}

export default new TemplateService();
