"use client";
import { useState } from "react";
import "./layout.css";
import EmissionCard from "./components/EmissionCard/page";
import TotalCostCard from "./components/TotalCostCard/page";
import ChartPie from "./components/ChartPie/page";

const cardInfo = {
  naturalGas: {
    label: "Natural Gas",
    options: ["Dollar", "Thousand cubic feet", "Therms"],
    emissionType: "natural_gas",
  },
  electricity: {
    label: "Eletricity",
    options: ["Dollar", "kWh"],
    emissionType: "electricity",
  },
  fuelOil: {
    label: "Fuel Oil",
    options: ["Dollar", "Gallons"],
    emissionType: "fuel_oil",
  },
  propane: {
    label: "Propane",
    options: ["Dollar", "Gallons"],
    emissionType: "propane",
  },
};

interface DataProps {
  id: number;
  totalEmissions: number;
  total: number;
  value: number;
  label: string;
}

export default function CarbonDashboard() {
  const [data, setData] = useState<DataProps[]>([
    {
      id: 0,
      totalEmissions: 0,
      total: 0,
      value: 0,
      label: cardInfo.naturalGas.label,
    },
    {
      id: 1,
      totalEmissions: 0,
      total: 0,
      value: 0,
      label: cardInfo.electricity.label,
    },
    {
      id: 2,
      totalEmissions: 0,
      total: 0,
      value: 0,
      label: cardInfo.fuelOil.label,
    },
    {
      id: 3,
      totalEmissions: 0,
      total: 0,
      value: 0,
      label: cardInfo.propane.label,
    },
  ]);

  const totalEmissions = data.reduce(
    (acc: number, curr: DataProps) => acc + curr.totalEmissions,
    0
  );

  return (
    <div>
      <h1>Carbon Dashboard</h1>
      <div className="rows">
        <div className="emission_container">
          <div className="emission_cell">
            <EmissionCard
              label={cardInfo.naturalGas.label}
              options={cardInfo.naturalGas.options}
              emissionType={cardInfo.naturalGas.emissionType}
              data={data}
              setData={setData}
            />
          </div>
          <div className="emission_cell">
            <EmissionCard
              label={cardInfo.electricity.label}
              options={cardInfo.electricity.options}
              emissionType={cardInfo.electricity.emissionType}
              data={data}
              setData={setData}
            />
          </div>
          <div className="emission_cell">
            <EmissionCard
              label={cardInfo.fuelOil.label}
              options={cardInfo.fuelOil.options}
              emissionType={cardInfo.fuelOil.emissionType}
              data={data}
              setData={setData}
            />
          </div>
          <div className="emission_cell">
            <EmissionCard
              label={cardInfo.propane.label}
              options={cardInfo.propane.options}
              emissionType={cardInfo.propane.emissionType}
              data={data}
              setData={setData}
            />
          </div>
        </div>
      </div>
      <div className="rows">
        <div className="row_cell">
          <TotalCostCard total={totalEmissions} usAvg="14,247" />
        </div>
        <div className="row_cell">
          <ChartPie data={data} />
        </div>
      </div>
    </div>
  );
}
