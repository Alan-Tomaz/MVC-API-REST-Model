import express from "express";
import routes from './routes.js';

const app = express();

//indicate to express to read body json
app.use(express.json());

// use router
app.use(routes);


export default app;