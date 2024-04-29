import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "./sideMenu";

const SideMenuComponent = ({ data }) => {
  const location = useLocation();
  const [menuData, setMenuData] = useState(data);

  useEffect(() => {
    const updatedData = menuData.map((item) => ({
      ...item,
      variant: location.pathname === item.uri,
    }));
    setMenuData(updatedData);
  }, [location]);

  return <SideMenu data={menuData} />;
};

export default SideMenuComponent;
