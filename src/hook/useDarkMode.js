import React, { useEffect, useState } from "react";

const UseDarkMode = () => {
  let [theme, setTheme] = useState(localStorage.theme);
  let colorTheme = theme == "dark" ? "light" : "dark";

  useEffect(() => {
    let root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);

    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);
  return [colorTheme, setTheme];
};

export default UseDarkMode;
