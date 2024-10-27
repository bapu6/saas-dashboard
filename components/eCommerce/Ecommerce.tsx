import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { ThemeContext } from "../context/ThemeContext";
import { colors } from "@/utils/constants";
import Card from "./Card";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./CustomLineChart";
import WorldMap from "@/assets/svg/charts/WorldMap";
import BasicTable from "./Table";
import PieChart from "./PieChart";

type cardDataType = {
  title: string;
  count: number;
  growth: number;
  cta: () => void;
  bg: string;
};
type EcommercePropsType = {
  setIsOrdersClicked: Dispatch<SetStateAction<boolean>>;
};
const Ecommerce: FC<EcommercePropsType> = ({ setIsOrdersClicked }) => {
  const { theme } = useContext(ThemeContext);

  const graphBackground =
    theme === "light" ? colors.orderListHeaderLight : colors.listActiveDark;

  const primary20 =
    theme === "light" ? colors.btnInactiveLight : colors.listActiveDark;

  const dotColor =
    theme === "light" ? colors.listActiveDark : colors.primaryBrand;

  const categoriesData: cardDataType[] = [
    {
      title: "Customers",
      count: 3781,
      growth: 11.01,
      cta: () => {},
      bg: colors.primaryBlue,
    },
    {
      title: "Orders",
      count: 1219,
      growth: -0.03,
      cta: () => setIsOrdersClicked(true),
      bg: graphBackground,
    },
    {
      title: "Revenue",
      count: 695,
      growth: 15.03,
      cta: () => {},
      bg: graphBackground,
    },
    {
      title: "Growth",
      count: 30.1,
      growth: 6.08,
      cta: () => {},
      bg: colors.primaryBlue,
    },
  ];

  const worldMapData = [
    { country: "New York", revenue: 72 },
    { country: "San Francisco", revenue: 39 },
    { country: "Sydney", revenue: 25 },
    { country: "Singapore", revenue: 61 },
  ];

  const pieChartData = [
    { label: "Direct", value: 300.56, bg: colors.primaryBrand },
    { label: "Affilliate", value: 135.18, bg: colors.secondaryMint },
    { label: "Sponsored", value: 154.02, bg: colors.secondaryIndigo },
    { label: "E-mail", value: 48.96, bg: colors.pendingDot },
  ];

  return (
    <div className="w-full p-5">
      <p className="font-semibold">eCommerce</p>
      <div className="mt-3">
        {/* row-1 */}
        <div className="grid gap-4 grid-cols-2">
          <div className="grid gap-4 grid-cols-2">
            <Card data={categoriesData} />
          </div>
          <div
            className="rounded-2xl"
            style={{ backgroundColor: graphBackground }}
          >
            <CustomBarChart />
          </div>
        </div>
        {/* row-2 */}
        <div className="mt-3 flex gap-4">
          <div
            className="w-9/12 p-6 rounded-2xl"
            style={{ backgroundColor: graphBackground }}
          >
            {/* graph header */}
            <div className="flex items-center">
              <p className="font-semibold">Revenue</p>
              <div
                style={{
                  height: 20,
                  backgroundColor: primary20,
                  width: 3,
                  marginLeft: 15,
                  marginRight: 15,
                }}
              />
              <div className="flex items-center">
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: dotColor }}
                />
                <p className="text-[12px] ml-1">
                  Current Week <span className="font-semibold">$58,211</span>
                </p>
              </div>

              <div className="flex items-center ml-5">
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: colors.secondaryCyan }}
                />
                <p className="text-[12px] ml-1">
                  Previous Week <span className="font-semibold">$68,768</span>
                </p>
              </div>
            </div>
            {/* graph container */}
            <div>
              <CustomLineChart />
            </div>
          </div>
          <div
            className="w-3/12 p-6 rounded-2xl"
            style={{ backgroundColor: graphBackground }}
          >
            <p className="font-semibold pb-2">Revenue by Location</p>
            <WorldMap />
            <div className="flex flex-col flex-1">
              {worldMapData?.map((item) => (
                <div className="h-full mt-3">
                  <div className="flex w-full h-full justify-between">
                    <p>{item?.country}</p>
                    <p className="mt-1">{`${item?.revenue}K`}</p>
                  </div>
                  <LinearProgress
                    value={item?.revenue}
                    variant="determinate"
                    sx={{ backgroundColor: "#444d52" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* row-3 */}
        <div className="mt-3 flex gap-4">
          <div
            className="w-9/12 p-6 rounded-2xl"
            style={{ backgroundColor: graphBackground }}
          >
            {/* Table */}
            <p className="font-semibold">Top Selling Products</p>
            {/* graph container */}
            <div>
              <BasicTable />
            </div>
          </div>
          <div
            className="w-3/12 p-6 rounded-2xl"
            style={{ backgroundColor: graphBackground }}
          >
            <p className="font-semibold pb-2">Total Sales</p>
            <PieChart data={pieChartData} />
            <div className="flex flex-col flex-1">
              {pieChartData?.map((item) => (
                <div className="h-full mt-3" key={item?.label}>
                  <div className="flex w-full h-full justify-between">
                    <div className="flex items-center">
                      <div
                        className="h-1.5 w-1.5 mr-1.5 rounded-full"
                        style={{ backgroundColor: item.bg }}
                      />
                      <p>{item?.label}</p>
                    </div>
                    <p className="mt-1">{`$${item?.value}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
