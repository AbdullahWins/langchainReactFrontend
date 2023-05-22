import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeToggler = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="p-4">
      <p className="text-xs pb-2">Theme</p>
      <select className="gradientselect select select-sm" data-choose-theme>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="valentine">Valentine</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
    </div>
  );
};

export default ThemeToggler;
