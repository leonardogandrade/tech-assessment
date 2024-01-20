import { createServer } from "../../src/server";
import supertest from "supertest";

interface payloadType {
  total?: number;
  unit?: number;
}

let payload: payloadType = {
  total: 23,
  unit: 0,
};

const app = createServer();

describe("POST /carbon_emission", () => {
  it("should return 200", async () => {
    const response = await supertest(app)
      .post("/api/v1/carbon_emission/?type=natural_gas")
      .send(payload);

    expect(response.statusCode).toBe(200);
  });

  it("should return value = 3090", async () => {
    const response = await supertest(app)
      .post("/api/v1/carbon_emission/?type=natural_gas")
      .send(payload);

    expect(JSON.parse(response.text).value).toBe(3090);
  });

  it("should return 400", async () => {
    delete payload.unit;
    const response = await supertest(app)
      .post("/api/v1/carbon_emission/?type=natural_gas")
      .send(payload);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 and error when payload doesnt have unit key", async () => {
    const response = await supertest(app)
      .post("/api/v1//carbon_emission/?type=natural_gas")
      .send(payload);

    expect(response.status).toEqual(400);
    expect(response.body.errors).toEqual([
      {
        type: "field",
        msg: "Unit is required.",
        path: "unit",
        location: "body",
      },
      {
        type: "field",
        msg: "Unit should be numeric.",
        path: "unit",
        location: "body",
      },
    ]);
  });

  it("should return 400 and error when payload doesnt have total key", async () => {
    let payload: payloadType = {
      total: 23,
      unit: 0,
    };

    delete payload.total;

    const response = await supertest(app)
      .post("/api/v1/carbon_emission/?type=natural_gas")
      .send(payload);

    expect(response.status).toEqual(400);
    expect(response.body.errors).toEqual([
      {
        type: "field",
        msg: "Total is required.",
        path: "total",
        location: "body",
      },
      {
        type: "field",
        msg: "Total should be numeric.",
        path: "total",
        location: "body",
      },
    ]);
  });
});
