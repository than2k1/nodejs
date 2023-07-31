import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
const app = express();

// middleware
app.use(morgan("dev"));
app.use(helmet())
app.use(compression());

// db


// route
app.get('/', (req, res, next) => {
    return res.status(200).json({
        data: "hello"
    })
})
// err

export default app;