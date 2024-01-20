import { Costs } from "./Values";
import { CustomError } from "./CustomErrors";

class EmissionFactor {
  /**
   * Calculate Natural gas carbon emission
   * @param consumption
   * @param unit
   * @returns
   */
  naturalGas(consumption: number, unit: number): number {
    let total: number = 0;
    enum Units {
      "dollar" = 0,
      "thousandCubicFeet" = 1,
      "therms" = 2,
    }

    if (consumption < 0)
      throw new CustomError(400, "Value should be greater than 0.");

    switch (+unit) {
      case Units.dollar:
        total =
          (consumption / Costs.naturalGasCost) * Costs.eFnaturalGasDollar * 12;
        break;
      case Units.thousandCubicFeet:
        total =
          (consumption / Costs.naturalGasCost) * Costs.eFnaturalGasDollar * 12;
        break;
      case Units.therms:
        total =
          (consumption / Costs.naturalGasCost) * Costs.eFnaturalGasTherms * 12;
        break;
    }
    return parseInt(total.toFixed(2));
  }

  /**
   * Calculate Electricity carbon emission
   * @param consumption
   * @param unit
   * @returns
   */
  electricity(consumption: number, unit: number): number {
    let total: number = 0;
    enum Units {
      "dollar" = 0,
      "kwh" = 1,
    }

    switch (+unit) {
      case Units.dollar:
        total =
          (consumption / Costs.electricityCost) * Costs.efElectricityKwh * 12;
        break;
      case Units.kwh:
        total = consumption * Costs.efElectricityKwh * 12;
        break;
    }
    return parseInt(total.toFixed(2));
  }

  /**
   * Calculate Fuel oil carbon emission
   * @param consumption
   * @param unit
   * @returns
   */
  fuelOil(consumption: number, unit: number): number {
    let total: number = 0;
    enum Units {
      "dollar" = 0,
      "gallons" = 1,
    }

    switch (+unit) {
      case Units.dollar:
        total = (consumption / Costs.FuelOilCost) * Costs.efFuelOilGallon * 12;
        break;
      case Units.gallons:
        total = Costs.FuelOilCost * Costs.eFnaturalGasDollar * 12;
        break;
    }
    return parseInt(total.toFixed(2));
  }

  /**
   * Calculate Propane carbon emission
   * @param consumption
   * @param unit
   * @returns
   */
  propane(consumption: number, unit: number): number {
    let total: number = 0;
    enum Units {
      "dollar" = 0,
      "gallons" = 1,
    }

    switch (+unit) {
      case Units.dollar:
        total = (consumption / Costs.propaneCost) * Costs.efPropaneGallon * 12;
        break;
      case Units.gallons:
        total = Costs.propaneCost * Costs.eFnaturalGasDollar * 12;
        break;
    }
    return parseInt(total.toFixed(2));
  }
}

export { EmissionFactor };
