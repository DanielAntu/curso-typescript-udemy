import express from "express";
import config from "config";

const app = express();

// Json middlewares
app.use(express.json());

// DB
import db from "../config/db";

// app port
const port = config.get<number>("port");

// Routes
import router from "./router";

// Logger
import logger from "../config/logger";

import morganMiddleware from "./middlewares/morganMiddlewares";

app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
    await db();
    logger.info(`Aplicação está funcionando na porta: ${port}`);
});
