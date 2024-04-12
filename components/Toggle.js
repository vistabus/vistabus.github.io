import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleClick = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <Switch data-enable={isEnabled ? "true" : "false"} onClick={handleClick} />
  );
};

export default Toggle;
