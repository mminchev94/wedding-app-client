import { useState, useEffect } from "react";
import video from "../assets/video.mp4";

function BgVideo() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const handleBatteryChange = () => {
      setIsLowPowerMode(
        window.navigator &&
          window.navigator.battery &&
          window.navigator.battery.level < 0.2
      );
    };

    if (window.navigator && window.navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        setIsLowPowerMode(battery.level < 0.2);
        battery.addEventListener("levelchange", handleBatteryChange);
      });
    }

    return () => {
      if (window.navigator && window.navigator.getBattery) {
        navigator.getBattery().then((battery) => {
          battery.removeEventListener("levelchange", handleBatteryChange);
        });
      }
    };
  }, []);

  return (
    <div className="bgvideo">
      {isLowPowerMode ? (
        <div className="bgvideo-placeholder" />
      ) : (
        <video type="video/mp4" src={video} autoPlay muted loop playsInline />
      )}
    </div>
  );
}

export default BgVideo;
