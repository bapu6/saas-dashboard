"use client";
import React, { useContext } from "react";
import { Breadcrumb } from "antd";

import { ThemeContext } from "@/components/context/ThemeContext";
import Sidebar from "@/assets/svg/Sidebar";
import Star from "@/assets/svg/Star";
import { menu } from "@/utils/constants";

const Header = () => {
  const {
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
    <div className="flex h-14 border items-center px-8 justify-between">
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
        <button onClick={toggleTheme}>
          <p>toggle theme</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
