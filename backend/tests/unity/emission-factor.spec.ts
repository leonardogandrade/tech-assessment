import { EmissionFactor } from "../../src/helpers/EmissionFactor";
import { CustomError } from "../../src/helpers/CustomErrors";

describe("Test Emission Factor calculus", () => {
  const emissionFactor = new EmissionFactor();

  it("Should return positive number", () => {
    expect(emissionFactor.naturalGas(23, 0)).toBeGreaterThan(0);
  });

  it("Should return 3090", () => {
    expect(emissionFactor.naturalGas(23, 0)).toBe(3090);
  });

  it("Should return error when a negative number is provided", () => {
    expect(() => {
      emissionFactor.naturalGas(-23, 0);
    }).toThrow(CustomError);
  });

  it("Should return specific error when a negative number is provided", () => {
    expect(() => {
      emissionFactor.naturalGas(-23, 0);
    }).toThrow("Value should be greater than 0.");
  });
});
