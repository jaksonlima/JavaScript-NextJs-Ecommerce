import { useEffect, useState } from "react";

function useScroll() {
  const [show, setShow] = useState(true);

  // const size = useWindowSize();

  const showBelow = 250;

  const handleScroll = () => {
    if (window.pageXOffset > showBelow) {
      setShow(true);
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: `smooth` });
  };
}

export default useScroll;
