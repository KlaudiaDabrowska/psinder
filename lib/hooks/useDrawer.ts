import { useState } from "react";

const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (value: boolean) => {
    setIsDrawerOpen(value);
  };

  return { isDrawerOpen, toggleDrawer };
};

export default useDrawer;
