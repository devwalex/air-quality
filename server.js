import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import 'dotenv/config';
import airQualityJobs from './jobs/air.quality.jobs.js';

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

app.use(morgan('dev'));

app.use(routes);


const PORT = process.env.PORT || '3000';

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  airQualityJobs.checkParisAirQualityEveryMinute();
}

export default app;