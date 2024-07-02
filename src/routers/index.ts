import express from "express";
import testRouter from "./Test";

const routes = express.Router();

routes.use("/", testRouter);

export default routes;