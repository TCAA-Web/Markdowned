import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    let listen = window.addEventListener("resize", () => {
      let windowWidth = window.innerWidth;
      setWindowSize(windowWidth);
    });
    return () => {
      removeEventListener("resize", listen);
    };
  }, []);

  return windowSize;
};
