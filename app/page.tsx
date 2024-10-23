"use client";
import Header from "@/components/Header";
import Orders from "@/components/OrderList/Orders";
import LeftDrawer from "@/components/Sidebar/LeftDrawer";
import RightDrawer from "@/components/Sidebar/RightDrawer/RightDrawer";
import dynamic from "next/dynamic";

const ThemeContext = dynamic(
  () => import("@/components/context/ThemeContext"),
  {
    ssr: false,
  }
);

export default function Home() {
  // const [, set] = useState();
  return (
    <div>
      <ThemeContext>
        <div className="grid place-content-center bg-background">
          <div className="max-w-screen-2xl w-screen min-h-screen bg-white dark:bg-black flex overflow-auto">
            <div className="w-1/5">
              <LeftDrawer />
            </div>
            <div className="flex-1 border-x">
              <Header />
              <Orders />
            </div>
            <div className="flex w-1/5">
              <RightDrawer />
            </div>
          </div>
        </div>
      </ThemeContext>
    </div>
  );
}
