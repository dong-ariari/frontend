import React, { useState, useEffect } from "react";
import Chips from "./chips";
import { useLocation } from "react-router-dom";

const ChipsComponent = ({ data }) => {
  const location = useLocation();
  const [chipsData, setChipsData] = useState(data);

  useEffect(() => {
    const updatedData = chipsData.map((item) => ({
      ...item,
      variant: location.pathname === item.uri,
    }));
    setChipsData(updatedData);
  }, [location]);

  return <Chips data={chipsData} handleChipsClick={} />;
};

export default ChipsComponent;
