import video from "../assets/video.mp4";
import { useState, useEffect } from "react";

function BgVideo() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsLowPowerMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsLowPowerMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (isLowPowerMode) {
    return null;
  }

  return (
    <div className="bgvideo">
      <video type="video/mp4" src={video} autoPlay muted loop playsInline />
    </div>
  );
}

export default BgVideo;
