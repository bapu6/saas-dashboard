import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

function CustomPieChart({ data }) {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 80,
            cornerRadius: 15,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}

export default CustomPieChart;
