"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ConfigProvider } from "antd";

import { colors } from "@/utils/constants";

type ThemeType = {
  theme: string;
  activeBg: string;
  activeFg: string;
  inactiveFg: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeType | null>(null);

const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage?.getItem("theme") || "light");

  const activeBg = theme === "light" ? colors.white : colors.black;
  const activeFg = theme !== "light" ? colors.white : colors.black;
  const inactiveFg =
    theme === "light" ? colors.btnInactiveDark : colors.btnInactiveLight;
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage?.setItem("theme", newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const selectedTheme = localStorage?.getItem("theme");
    if (selectedTheme) setTheme(selectedTheme);
    document.documentElement.classList.add(selectedTheme || "light");
  }, []);
  return (
    <ThemeContext.Provider
      value={{ theme, activeBg, activeFg, inactiveFg, toggleTheme }}
    >
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: ${activeFg};
        }
        h1 {
          font-weight: 700;
        }
        p {
          color: ${activeFg};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        .MuiTimelineConnector-root {
          background: ${activeFg} !important;
          opacity: 0.1;
        }
        .css-1fe8ybo-MuiTypography-root-MuiTimelineContent-root {
          align-contents: center !important;
        }
        .MuiDataGrid-cell {
          color: ${activeFg} !important;
        }
        .css-6qpcc8-MuiButtonBase-root-MuiPaginationItem-root {
          color: ${activeFg} !important;
        }
        .css-1umw9bq-MuiSvgIcon-root {
          color: ${activeFg} !important;
        }
        .MuiDataGrid-row--borderBottom {
          background-color: transparent !important;
        }
        .MuiDataGrid-columnHeaderTitle {
          color: ${inactiveFg} !important;
        }
        .MuiDataGrid-columnSeparator {
          display: none !important;
        }
        .MuiBarElement-root {
          width: 22px !important;
          border-right: 4px !important;
        }
        .MuiBarElement-series-auto-generated-id-1 {
          border-radius: 8px !important;
        }
        .MuiLinearProgress-bar {
          background-color: #a8c5da !important;
        }
        .MuiChartsAxis-line {
          stroke: ${activeFg} !important;
        }
      `}</style>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHeight: 35,

              // light theme
              itemSelectedColor: colors?.black,
              itemSelectedBg: colors.listActiveLight,

              // dark theme
              darkItemBg: "transparent",
              darkItemSelectedBg: colors.menuItemSelectedBgDark,
              darkSubMenuItemBg: "transparent",
            },
            Breadcrumb: {
              itemColor: inactiveFg,
              lastItemColor: activeFg,
              separatorColor: inactiveFg,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
