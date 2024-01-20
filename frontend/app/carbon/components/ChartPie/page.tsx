"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card, Box, Skeleton, Stack } from "@mui/material";

interface ItemProps {
  id: number;
  totalEmissions: number;
  total: number;
  label: string;
  value: number;
}

export default function ChartPie({ data }: any) {
  return (
    <Box>
      <Card variant="outlined" sx={{ p: 2 }}>
        {data?.filter((item: ItemProps) => item?.totalEmissions > 0).length >
        0 ? (
          <PieChart
            series={[
              {
                data,
              },
            ]}
            width={685}
            height={398}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Skeleton
                variant="circular"
                width={380}
                height={380}
                sx={{ ml: 15, mt: 1 }}
              />
            </div>
            <div>
              <Stack
                spacing={1}
                width={105}
                height={278}
                sx={{ ml: 10, mt: 15 }}
              >
                <Skeleton variant="rounded" width={40} height={40} />
                <Skeleton variant="rounded" width={40} height={40} />
                <Skeleton variant="rounded" width={40} height={40} />
                <Skeleton variant="rounded" width={40} height={40} />
              </Stack>
            </div>
          </div>
        )}
      </Card>
    </Box>
  );
}
