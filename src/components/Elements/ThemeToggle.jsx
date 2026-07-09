import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <FormControlLabel
        control={
          <Switch
            checked={mode === "dark"}
            onChange={toggleMode}
            color="primary"
          />
        }
        label={mode === "dark" ? "Dark Mode" : "Light Mode"}
      />
    </div>
  );
}
