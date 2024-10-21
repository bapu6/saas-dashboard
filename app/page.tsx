"use client";

// import ThemeContext from "@/components/context/ThemeContext";
const ThemeContext = dynamic(
  () => import("@/components/context/ThemeContext"),
  {
    ssr: false,
  }
);
import Header from "@/components/Header";
import LeftDrawer from "@/components/Sidebar/LeftDrawer";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div>
      <ThemeContext>
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
      </ThemeContext>
    </div>
  );
}
