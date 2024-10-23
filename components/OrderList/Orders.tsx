import React, { useContext } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Magnifire from "@/assets/svg/Mangifire";
import { ThemeContext } from "../context/ThemeContext";
import AddIcon from "@/assets/svg/orders/AddIcon";
import Filter from "@/assets/svg/orders/Filter";
import SortIcon from "@/assets/svg/orders/SortIcon";
import CustomDataGrid from "./CustomDataGrid";

const Orders = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="h-full w-full p-3">
      <p className=" font-semibold">Order List</p>
      <div
        className={`${
          theme === "light" ? "bg-orderListHeaderLight" : "bg-listActiveDark"
        } h-11 rounded-lg p-2 flex justify-between `}
      >
        <div className="flex justify-between w-28 items-center">
          <AddIcon />
          <Filter />
          <SortIcon />
        </div>
        <div>
          <div
            className={`flex w-40 h-7 rounded-lg px-2 py-1 items-center ${
              theme === "dark"
                ? "bg-menuItemSelectedBgDark"
                : "bg-listActiveLight"
            }`}
          >
            <Magnifire opacity={0.2} />
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="mt-3">
        <CustomDataGrid />
      </div>
    </div>
  );
};

export default Orders;
