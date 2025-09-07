import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import passport_middleware from "./middleware/passport.js";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

import { dirname } from "path";
import { fileURLToPath } from "url";

import { clientURLS, adminURLS } from "./configs/environment.js";
const origin_whitelist = [...adminURLS, ...clientURLS, null];
const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
console.log("allowed origins: ", [...adminURLS, ...clientURLS]);
app.use(
  cors({
    credentials: true,
    origin: function (origin, cb) {
      if (true || origin_whitelist.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error("Cors: origin not allowed"));
      }
    },
    preflightContinue: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

passport_middleware(app);

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
