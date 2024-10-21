"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import type { MenuProps } from "antd";
import { Button } from "antd";
import isEmpty from "lodash/isEmpty";

import ByeWind from "@/assets/ByeWind.png";
import SelectedLeftIcon from "@/assets/svg/SelectedLeftIcon";
import Default from "@/assets/svg/Default.svg";
import eCommerce from "@/assets/svg/eCommerce.svg";
import Projects from "@/assets/svg/Projects.svg";
import Account from "@/assets/svg/Account.svg";
import Blog from "@/assets/svg/Blog.svg";
import Corporate from "@/assets/svg/Corporate.svg";
import OnlineCourse from "@/assets/svg/OnlineCourses.svg";
import Social from "@/assets/svg/Social.svg";
import UserProfile from "@/assets/svg/UserProfile.svg";
import AngelArrowRight from "@/assets/svg/AngelArrowRight.svg";
import { colors, menu } from "@/utils/constants";
import CustomMenu from "./Menu/CustomMenu";
import { ThemeContext } from "@/components/context/ThemeContext";

type MenuItem = Required<MenuProps>["items"][number];

const App: React.FC = () => {
  const { theme, inactiveFg } = useContext(ThemeContext);

  const [selectedDashboardMenu, setSelectedDashboardMenu] = useState<string[]>([
    menu.DEFAULT,
  ]);
  const [selectedPagesMenu, setSelectedPagesMenu] = useState<string[]>([
    menu.PAGES,
  ]);

  const [selectedBtn, setSelectedBtn] = useState<string>("favorites");

  const [oenedMenus, setOenedMenus] = useState<string[] | null>(null);

  const {
    DASHBOARDS,
    DEFAULT,
    ECOMMERCE,
    PROJECTS,
    ONLINE_COURSES,
    PAGES,
    USER_PROFILE,
    OVERVIEW,
    CAMPAIGNS,
    DOCUMENTS,
    FOLLOWERS,
    ACCOUNT,
    CORPORATE,
    BLOG,
    SOCIAL,
    OPTION1,
    OPTION2,
  } = menu;

  const onClickPageMenu: MenuProps["onClick"] = (e) => {
    setSelectedPagesMenu(e?.keyPath);
  };

  const onClickDashboardMenu: MenuProps["onClick"] = (e) => {
    setSelectedDashboardMenu(e?.keyPath);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (e) => {
    setOenedMenus(e);
  };

  const isMenuSelected = (menuType: string, key: string) => {
    return menuType === DASHBOARDS
      ? selectedDashboardMenu?.includes(key)
      : selectedPagesMenu?.includes(key);
  };

  const listData = {
    favorites: [OVERVIEW, PROJECTS],
    recently: [PROJECTS, OVERVIEW],
  };

  const menus = {
    [DASHBOARDS]: {
      key: DASHBOARDS,
      label: DASHBOARDS,
      children: [
        { label: DEFAULT, icon: Default, children: [] },
        {
          label: ECOMMERCE,
          icon: eCommerce,
          children: [
            { label: OPTION1, icon: eCommerce },
            { label: OPTION2, icon: eCommerce },
          ],
        },
        {
          label: PROJECTS,
          icon: Projects,
          children: [
            { label: OPTION1, icon: Projects },
            { label: OPTION2, icon: Projects },
          ],
        },
        {
          label: ONLINE_COURSES,
          icon: OnlineCourse,
          children: [
            { label: OPTION1, icon: OnlineCourse },
            { label: OPTION2, icon: OnlineCourse },
          ],
        },
      ],
    },
    [PAGES]: {
      key: PAGES,
      label: PAGES,
      children: [
        {
          label: USER_PROFILE,
          icon: UserProfile,
          children: [
            { label: OVERVIEW, icon: UserProfile, children: [] },
            { label: PROJECTS, icon: UserProfile, children: [] },
            { label: CAMPAIGNS, icon: UserProfile, children: [] },
            { label: DOCUMENTS, icon: UserProfile, children: [] },
            { label: FOLLOWERS, icon: UserProfile, children: [] },
          ],
        },
        {
          label: ACCOUNT,
          icon: Account,
          children: [
            { label: OPTION1, icon: Account },
            { label: OPTION2, icon: Account },
          ],
        },
        {
          label: CORPORATE,
          icon: Corporate,
          children: [
            { label: OPTION1, icon: Corporate },
            { label: OPTION2, icon: Corporate },
          ],
        },
        {
          label: BLOG,
          icon: Blog,
          children: [
            { label: OPTION1, icon: Blog },
            { label: OPTION2, icon: Blog },
          ],
        },
        {
          label: SOCIAL,
          icon: Social,
          children: [
            { label: OPTION1, icon: Social },
            { label: OPTION2, icon: Social },
          ],
        },
      ],
    },
  };

  const getMenu = (menuType: string): MenuItem[] => {
    const chosenMenu = menus?.[menuType as keyof typeof menus];
    return [
      {
        key: chosenMenu?.key,
        label: (
          <div>
            <p
              className={`${
                theme === "light"
                  ? "text-fontInactiveDark"
                  : "text-fontInactiveLight"
              }`}
            >
              {chosenMenu?.label}
            </p>
          </div>
        ),
        type: "group",
        children: chosenMenu?.children?.map((item) => ({
          key: item?.label,
          label: (
            <div className="flex items-center">
              <Image
                src={item?.icon}
                alt="menu-icon"
                className="h-full w-full"
              />
              <p className="ml-1">{item?.label}</p>
            </div>
          ),
          icon: (
            <div className="flex items-center">
              <SelectedLeftIcon
                height={24}
                width={4}
                className={`${
                  isMenuSelected(menuType, item?.label)
                    ? "visible"
                    : "invisible"
                }`}
              />
              {
                <Image
                  className={`mx-2 ${
                    isEmpty(item?.children) ? "invisible" : "visible"
                  }`}
                  src={AngelArrowRight}
                  alt="angel-arrow"
                  style={{
                    rotate: oenedMenus?.includes(item?.label)
                      ? "90deg"
                      : "0deg",
                  }}
                />
              }
            </div>
          ),
          children:
            !isEmpty(item?.children) &&
            item?.children?.map((child) => ({
              key: child?.label,
              label: (
                <div className="flex items-center pl-6">
                  <Image
                    src={item?.icon}
                    alt="default-menu"
                    className="h-full w-full invisible"
                  />
                  <p className="ml-1">{child?.label}</p>
                </div>
              ),
              icon: <></>,
            })),
        })),
      },
    ];
  };

  const dashboardMenu: MenuItem[] = getMenu(DASHBOARDS);
  const pagesMenu: MenuItem[] = getMenu(PAGES);

  console.log("dashboardMenu :>> ", dashboardMenu);

  return (
    <div className="flex p-4 w-full flex-col gap-4">
      <div className="w-full flex items-center p-2">
        <Image
          className="h-6 w-6 rounded-full"
          src={ByeWind}
          alt="user-avatar"
        />
        <p className="ml-2">ByeWind</p>
      </div>
      <div className="flex flex-col gap-1 pb-2">
        <div>
          <Button
            className="px-2 py-1"
            color="default"
            variant="text"
            onClick={() => setSelectedBtn("favorites")}
          >
            <p
              className={`text-[${
                theme === "light"
                  ? selectedBtn === "favorites"
                    ? colors.fontInactiveDark
                    : colors.btnInactiveDark
                  : selectedBtn === "favorites"
                  ? colors.fontInactiveLight
                  : colors.btnInactiveLight
              }]`}
            >
              Favorites
            </p>
          </Button>
          <Button
            className="px-2 py-1"
            color="default"
            variant="text"
            name="b"
            onClick={() => setSelectedBtn("recently")}
          >
            <p
              className={`text-${
                theme === "light"
                  ? selectedBtn === "recently"
                    ? colors.fontInactiveDark
                    : colors.btnInactiveDark
                  : selectedBtn === "recently"
                  ? colors.fontInactiveLight
                  : colors.btnInactiveLight
              }`}
            >
              Recently
            </p>
          </Button>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          {listData?.[selectedBtn as keyof typeof listData]?.map(
            (item: string) => (
              <div key={item} className="flex items-center ml-6 gap-y-4 p-2">
                <div className="flex justify-center items-center w-4 h-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-iconInactive" />
                </div>
                <p className="text-fontBlack ml-2">{item}</p>
              </div>
            )
          )}
        </div>
      </div>
      <CustomMenu
        items={dashboardMenu}
        onClick={onClickDashboardMenu}
        onOpenChange={onOpenChange}
      />
      <div className="mt-2">
        <CustomMenu
          items={pagesMenu}
          onClick={onClickPageMenu}
          onOpenChange={onOpenChange}
        />
      </div>
    </div>
  );
};

export default App;
