"use client";

import { Button, Box, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card
          className="main_card"
          variant="outlined"
          style={{
            display: "flex",
            width: 400,
            height: 400,
            justifyContent: "center",
            alignContent: "center",
            marginTop: "10vh",
          }}
        >
          <CardContent>
            <Typography>
              This is a sample application was developed to demonstrate
              habilities in JS. Clicking on the button below you&lsquo;ll be
              redirect to the main dashboar
            </Typography>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="button"
                onClick={() => router.push("/carbon")}
              >
                GO to Dashboard
                <KeyboardDoubleArrowRightIcon />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
