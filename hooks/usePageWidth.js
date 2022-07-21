import { useState, useEffect } from 'react';

function getWindowWidth(window) {
  if (!window) return
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const isMobile = windowWidth < 1100

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth(window));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth, isMobile };
}