import React, { useState, useEffect } from "react";
import Chips from "./chips";
import { useLocation } from "react-router-dom";
import { CHIPS_DATA } from "../../data/components/chips";

const ChipsComponenet = () => {
  const location = useLocation();
  const [chipsData, setChipsData] = useState(CHIPS_DATA);

  useEffect(() => {
    const updatedData = chipsData.map((item) => ({
      ...item,
      variant: location.pathname === item.uri,
    }));
    setChipsData(updatedData);
  }, [location]);

  return <Chips data={chipsData} />;
};

export default ChipsComponenet;
