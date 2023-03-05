import express  from 'express';
import router from "./src/router/index.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = Number(process.env.PORT)

app.use('/api/mailer/v1', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

