import * as React from "react";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

import { ThemeContext } from "../context/ThemeContext";

const uData = [8, 0, 4, 13, 13, 18];
const pData = [0, 7, 11, 3, 17, 19];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function DashedLineChart() {
  const { activeFg } = React.useContext(ThemeContext);
  return (
    <LineChart
      disableLineItemHighlight
      colors={["#A8C5DA", "#677680"]}
      height={280}
      tooltip={{ trigger: "none" }}
      series={[
        {
          showMark: false,
          data: pData,
          id: "pvId",
          curve: "smooth",
          strokeDasharray: ({ index }) => (index < 10 ? "0" : "5 5"), // Dotted for even points
        },
        {
          showMark: false,
          data: uData,
          id: "uvId",
          curve: "smooth",
        },
      ]}
      xAxis={[
        {
          scaleType: "point",
          data: xLabels,
          tickLabelStyle: { stroke: activeFg },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { stroke: activeFg },
          tick: {
            fill: "#d32f2f", // Tick label color
          },
          axisLine: {
            stroke: "#d32f2f", // Y-axis line color
          },
        },
      ]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 3,
        },
        ".MuiLineElement-series-pvId": {
          strokeDasharray: "5 5",
        },
      }}
    />
  );
}
