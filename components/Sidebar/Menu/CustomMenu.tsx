"use client";

import React, { useContext } from "react";
import { Menu, MenuProps, MenuTheme } from "antd";
import { ThemeContext } from "@/components/context/ThemeContext";

type MenuItem = Required<MenuProps>["items"][number];

type CustomMenuProps = {
  items: MenuItem[];
  onClick: () => void;
  onOpenChange: () => void;
};

const CustomMenu: React.FC<CustomMenuProps> = ({
  items,
  onClick,
  onOpenChange,
}) => {
  const { theme }: { theme: MenuTheme } = useContext(ThemeContext);
  return (
    <div className="flex">
      <Menu
        onOpenChange={onOpenChange}
        onClick={onClick}
        style={{ width: "100%", border: "none" }}
        defaultSelectedKeys={[items?.[0]?.children?.[0]?.key as string]}
        mode="inline"
        items={items}
        expandIcon={null}
        theme={theme as MenuTheme}
      />
    </div>
  );
};

export default CustomMenu;
