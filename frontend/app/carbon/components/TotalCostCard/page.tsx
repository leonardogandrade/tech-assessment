import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/link";

// interface Props {
//   total: number;
//   usAvg: string;
// }

export default function TotalCostCard({ total, usAvg }: any) {
  return (
    <Box sx={{ minWidth: 412 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5">Carbon Footprint</Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Annual CO2 emissions (lbs.)
            </Typography>
            <Divider />
            <br />
            <Typography variant="h6" component="div">
              Current Total:
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.primary"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
            <br />
            <Typography variant="body2">
              US Average
              <br />
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.primary"
              fontWeight="fontWeightBold"
            >
              {usAvg}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              *data from U.S Environmental
              <br /> Protection Agency
              <br />
              Access the official website{" "}
              <Link href="https://www.epa.gov/">here</Link>
            </Typography>
            <br />
            <br />
            <Button variant="contained">GO</Button>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
