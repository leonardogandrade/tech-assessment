import { body } from "express-validator";

const emissionValidator = [
  body("total").notEmpty().withMessage("Total is required."),
  body("total").isNumeric().withMessage("Total should be numeric."),
  body("unit").notEmpty().withMessage("Unit is required."),
  body("unit").isNumeric().withMessage("Unit should be numeric."),
];

export { emissionValidator };
