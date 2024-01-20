export class EmissionService {
  async EmissionCalculus(emissionType: string, total: number, unit: number) {
    const response = await fetch(
      `${process.env.BACKEND_URL}/carbon_emission/?type=${emissionType}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ total, unit }),
      }
    );

    return response;
  }
}
