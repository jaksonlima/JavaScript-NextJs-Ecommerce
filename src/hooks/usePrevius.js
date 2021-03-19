import { useEffect, useRef } from "react";

export const usePrevius = (data) => {
  const previusData = useRef();

  useEffect(() => {
    previusData.current = data;
  }, []);

  return previusData.current;
};
