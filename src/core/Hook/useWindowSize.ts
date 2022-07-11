import { useState } from "react";
import useEventListener from "@core/Hook/useEventListener";
import useIsomorphicLayoutEffect from "@core/Hook/useIsomorphicLayoutEffect";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const handleSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return windowSize;
};

export default useWindowSize;
