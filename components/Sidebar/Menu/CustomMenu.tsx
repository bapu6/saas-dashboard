import React, { useContext } from "react";
import { Menu, ConfigProvider, MenuProps, MenuTheme } from "antd";
import { colors } from "@/utils/constants";
import { ThemeContext } from "@/app/page";

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
  console.log("items?.[0]?.key :>> ", items?.[0]?.children?.[0]?.key as string);
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
