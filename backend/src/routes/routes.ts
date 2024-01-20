import { Router, Request, Response } from "express";
import { Emissions } from "../controllers/CarbonEmission-controller";
import { emissionValidator } from "../middlewares/EmissionsValidator";

const routes = Router();

routes.post("/carbon_emission/", emissionValidator, Emissions);

export default routes;
