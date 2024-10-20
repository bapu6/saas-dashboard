"use client";

import Header from "@/components/Header";
import LeftDrawer from "@/components/Sidebar/LeftDrawer";
import { colors } from "@/utils/constants";
import { ConfigProvider } from "antd";
import {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeType = {
  theme: string;
  activeBg: string;
  activeFg: string;
  inactiveFg: string;
  toggleTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeType>();

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const activeBg = theme === "light" ? colors.white : colors.black;
  const activeFg = theme !== "light" ? colors.white : colors.black;
  const inactiveFg =
    theme === "light" ? colors.fontInactiveDark : colors.fontInactiveLight;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage?.setItem("theme", newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
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
          background-color: ${theme === "light" ? "#ffffff" : "#000000"};
        }
        h1 {
          font-weight: 700;
        }
        p {
          color: ${theme === "light" ? "#000000" : "#ffffff"};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      `}</style>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              // light theme
              itemSelectedColor: colors?.black,
              itemSelectedBg: colors.listActiveLight,

              // dark theme
              darkItemBg: "transparent",
              darkItemSelectedBg: colors.listBgDark,
            },
            Breadcrumb: {
              itemColor: inactiveFg,
              lastItemColor: activeFg,
            },
          },
        }}
      >
        <div className="grid place-content-center bg-background">
          <div className="max-w-screen-2xl w-screen h-screen bg-white dark:bg-black flex">
            <div className="w-1/5">
              <LeftDrawer />
            </div>
            <div className="flex-1 border border-x">
              <Header />
            </div>
            <div className="flex w-1/5"></div>
          </div>
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
