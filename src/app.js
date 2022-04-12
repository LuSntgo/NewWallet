import cors from "cors";
import express from "express";
import userRouter from "./routers/userRouter.js";
import authRouter from "./routers/authRouter.js";
import financialRouter from "./routers/financialRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(authRouter);
app.use(financialRouter);

export default app;
