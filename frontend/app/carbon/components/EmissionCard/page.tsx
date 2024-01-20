"use client";
import { useState, Fragment, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { EmissionService } from "../../../../services/EmissionService";

interface setDataProps {
  id: number;
  totalEmissions: number;
  total: number;
  value: number;
  label: string;
}

interface DataProps {
  label: string;
  options: string[];
  data: setDataProps[];
  emissionType: string;
  setData: Dispatch<SetStateAction<setDataProps[]>>;
}

export default function EmissionCard({
  label,
  options,
  emissionType,
  data,
  setData,
}: DataProps) {
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [unit, setUnit] = useState(0);
  const indexOnData = data.findIndex((item) => item.label === label);
  const total = data[indexOnData].total;

  const handleChangeUnit = (event: SelectChangeEvent) => {
    setUnit(parseInt(event.target.value));
  };

  const handleChangeValue = async (event: any) => {
    const total = event.target.value;
    const newData = [...data];
    const service = new EmissionService();

    const result = await service.EmissionCalculus(emissionType, total, unit);

    const emissions = await result.json();
    setTotalEmissions(emissions.value);
    newData[indexOnData].total = Number(total);
    newData[indexOnData].totalEmissions = Number(emissions.value);
    newData[indexOnData].value = Number(emissions.value);
    setData(newData);
  };

  const menuItems = options?.map((value: string, index: number) => (
    <MenuItem key={index} value={index}>
      {value}
    </MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {label}
            </Typography>
            <br />
            <TextField
              id="outlined-number"
              label=""
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              value={total}
              name="carbonEmission"
              onChange={handleChangeValue}
              InputProps={{ inputProps: { min: 0 } }}
            />
            <div>
              <FormControl
                fullWidth
                size="small"
                style={{ width: "195px", marginTop: "10px" }}
              >
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={unit.toString()}
                  label="Consumption"
                  onChange={handleChangeUnit}
                >
                  {menuItems}
                </Select>
              </FormControl>
            </div>
          </CardContent>
          <CardActions>
            <Typography
              className="money"
              variant="h5"
              color="black"
              marginLeft="10px"
            >
              {totalEmissions} lbs.
            </Typography>
          </CardActions>
        </Fragment>
      </Card>
    </Box>
  );
}
