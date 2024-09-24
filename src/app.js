import express, { json, urlencoded } from "express";

import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

///Setting up the cors origin from where user can make request to this origin where our backend is
///In .env file i setup CORS_ORIGIN=* so that we can make request from any origin
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

///Here we are setting that we accept in request and send json as response and limit is 16kb
app.use(express.json({
   limit: "16kb", 
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

export { app }