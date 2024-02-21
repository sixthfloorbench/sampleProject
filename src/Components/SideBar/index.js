import React, { useState } from "react";
import "./index.scss";
import { Menu } from "antd";

function SideBar(props) {
  const {
    className = "",
    theme = "light",
    mode = "inline",
    options = [],
    onClick,
  } = props;

  const [itemName, setItemName] = useState("Select User Name");

  return (
    <>
      <Menu
        mode={mode}
        theme={theme}
        onClick={onClick}
        defaultSelectedKeys={null}
        defaultOpenKeys={null}
        className={`sidebar-wrapper ${className} min-h-96`}
        items={options}
      />
    </>
  );
}

export default SideBar;
