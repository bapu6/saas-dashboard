"use client";
import React, { useContext } from "react";
import { Breadcrumb } from "antd";

import { ThemeContext } from "@/components/context/ThemeContext";
import Sidebar from "@/assets/svg/Sidebar";
import Star from "@/assets/svg/Star";
import Magnifire from "@/assets/svg/Mangifire";
import Text from "@/assets/svg/Text";
import Sun from "@/assets/svg/Sun";
import Bell from "@/assets/svg/Bell";
import ClockCounterClockwise from "@/assets/svg/ClockCounterClockwise";
import { menu } from "@/utils/constants";

const Header = () => {
  const {
    theme,
    toggleTheme,
  }: {
    theme: string;
    toggleTheme: React.Dispatch<React.SetStateAction<string>>;
  } = useContext(ThemeContext);

  const breadCrumbItems = [
    {
      title: menu.DASHBOARDS,
    },
    {
      title: "Default",
    },
  ];

  return (
    <div className="flex h-14 border-b items-center px-8 justify-between">
      <div className="flex">
        <div className="flex items-center gap-2">
          <Sidebar />
          <Star />
        </div>
        <div className="ml-2 flex items-center">
          <Breadcrumb items={breadCrumbItems} />
        </div>
      </div>
      <div className="flex">
        <div
          className={`flex w-40 h-7 rounded-lg px-2 py-1 items-center mr-5 ${
            theme === "dark"
              ? "bg-menuItemSelectedBgDark"
              : "bg-listActiveLight"
          }`}
        >
          <Magnifire opacity={0.2} />
          <div className="flex-1"></div>
          <Text />
        </div>
        <div className="flex w-[136px] justify-between items-center">
          <Sun onClick={toggleTheme} />
          <ClockCounterClockwise />
          <Bell />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
