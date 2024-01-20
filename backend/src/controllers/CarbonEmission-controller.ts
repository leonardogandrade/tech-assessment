import { Request, Response, NextFunction } from "express";
import { EmissionFactor } from "../helpers/EmissionFactor";
import { validationResult } from "express-validator";

interface objProps {
  total: number;
  unit: number;
}

const Emissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    const emissionFactor = new EmissionFactor();
    const emission_type = req.query.type as string;
    const data: objProps = req.body;
    let total_emission: number = 0;

    // Validate passed parameters
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    switch (emission_type) {
      case "natural_gas":
        total_emission = emissionFactor.naturalGas(data.total, data.unit);
        break;
      case "electricity":
        total_emission = emissionFactor.electricity(data.total, data.unit);
        break;
      case "fuel_oil":
        total_emission = emissionFactor.fuelOil(data.total, data.unit);
        break;
      case "propane":
        total_emission = emissionFactor.propane(data.total, data.unit);
        break;
    }

    res.json({ value: total_emission });
  } catch (err) {
    next(err);
  }
};

export { Emissions };
