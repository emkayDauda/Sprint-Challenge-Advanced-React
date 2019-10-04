import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("mode", false);

  useEffect(() => {
    console.log(darkMode);

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
    
  };

  return [darkMode, toggleMode];
};