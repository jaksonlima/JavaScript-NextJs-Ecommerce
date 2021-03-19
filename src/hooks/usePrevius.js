import { useEffect, useRef } from "react";

export const usePrevius = (data) => {
  const previusData = useRef();

  useEffect(() => {
    previusData = data;
  }, []);

  return previusData.current;
};
