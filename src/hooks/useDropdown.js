import { useState } from "react";

export const useDropDown = (title) => {
  const [state, setState] = useState({
    active: true,
    isOpen: false,
    selected: null,
  });

  const [spreadData, setSpreadData] = useState();

  const handleSpread = () => {
    if (state.active) {
      setState((prevState) => ({
        ...prevState,
        isOpen: !prevState.isOpen,
      }));
    }
  };

  const handleSelect = (item) => {
    setState({
      ...state,
      selected: item,
      isOpen: false,
    });
  };

  return {
    title: title,
    handleSpread,
    handleSelect,
    setSpreadData,
    state,
    spreadData,
  };
};



import { DUMMY_MAJOR0, DUMMY_MAJOR1 } from "../data/dummy/dropdown";

export const useDropDown2 = (title, title2) => {
  const [state, setState] = useState({
    active: true,
    isOpen: false,
    selected: null,
  });
  const [state2, setState2] = useState({
    active: false,
    isOpen: false,
    selected: null,
  });

  const [spreadData, setSpreadData] = useState();
  const [spreadData2, setSpreadData2] = useState();

  const handleSpread = () => {
    if (state.active) {
      const updated = { ...state, isOpen: !state.isOpen };
      setState(updated);
    }
  };

  const handleSpread2 = () => {
    if (state.selected === null || !state2.active) {
      return;
    }

    // GET
    if (state.selected.id === 0) {
      setSpreadData2(DUMMY_MAJOR0);
    } else if (state.selected.id == 1) {
      setSpreadData2(DUMMY_MAJOR1);
    }

    const updated = { ...state2, isOpen: !state2.isOpen };
    setState2(updated);
  };

  const handleSelect = (item) => {
    const updated = { ...state, selected: item, isOpen: false };
    setState(updated);

    const updated2 = { ...state2, active: true, selected: null };
    setState2(updated2);
    setSpreadData2(null);
  };

  const handleSelect2 = (item) => {
    const updated = { ...state2, selected: item, isOpen: false };
    setState2(updated);
  };

  return {
    dropdown: {
      title: title,
      handleSpread,
      handleSelect,
      setSpreadData,
      state,
      spreadData,
    },
    dropdown2: {
      title: title2,
      handleSpread2,
      handleSelect2,
      setSpreadData2,
      state2,
      spreadData2,
    },
  };
};


