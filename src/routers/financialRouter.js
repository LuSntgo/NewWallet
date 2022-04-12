import { Router } from "express";
import * as financialController from '../controllers/financialController.js'

const financialRouter = Router();

financialRouter.post("/financial-events", financialController.createFinancialEvents);
financialRouter.get("/financial-events", financialController.getFinancialEvents);
financialRouter.post("/financial-events/sum", financialController.getFinancialEventTotal);

export default financialRouter;