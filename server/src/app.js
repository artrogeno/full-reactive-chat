import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import Response from "./shared/utils/response";
import routes from "./routes";

class App extends Response {
  constructor() {
    super();
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json({ limit: "2mb " }));
    this.express.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,PATCH,POST,DELETE,OPTIONS"
      );
      next();
    });
    this.express.use(cors());
  }

  routes() {
    this.express.get("/health", (req, res) => {
      res.status(200).json({ server: "server it's works!" });
    });

    this.express.use(routes);

    this.express.use((req, res, next) => {
      const response = {
        status: 404,
        messages: this.messages.ROUTER_NOT_FOUND
      };
      this.sendError(res, next, response);
      next();
    });

    this.express.use((error, req, res, next) => {
      if (error.name === "UnauthorizedError") {
        const response = { status: 401, messages: this.messages.TOKEN_INVALID };
        this.sendError(res, next, response);
      }
      next();
    });

    this.express.use((error, req, res, next) => {
      const response = {
        status: error.status || 500,
        messages: this.messages.TOKEN_INVALID,
        error: error.message
      };
      this.sendError(res, next, response);
      next();
    });
  }
}

export default new App().express;
