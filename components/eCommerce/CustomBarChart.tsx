import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const CustomBarChart = () => {
  const { activeFg } = useContext(ThemeContext);

  const data = [
    { label: "Jan", projection: 11, actual: 6 },
    { label: "Feb", projection: 9, actual: 3 },
    { label: "Mar", projection: 14, actual: 8 },
    { label: "Apr", projection: 12, actual: 7 },
    { label: "May", projection: 15, actual: 10 },
    { label: "Jun", projection: 13, actual: 6 },
  ];

  return (
    <BarChart
      borderRadius={4}
      colors={["#A8C5DA", "#677680"]}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "label",
          tickFontSize: 12,
          tickLabelStyle: { stroke: activeFg },
        },
      ]}
      series={[
        { dataKey: "projection", stack: "stack1" },
        { dataKey: "actual", stack: "stack1" },
      ]}
      dataset={data}
      tooltip={{ trigger: "none" }}
      yAxis={[
        {
          tickFontSize: 12,
          tickLabelStyle: { stroke: activeFg },
          valueFormatter: (value: number) => `${value}M`,
        },
      ]}
    />
  );
};
export default CustomBarChart;
