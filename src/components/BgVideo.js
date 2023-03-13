import video from "../assets/video.mp4";
import { useState, useEffect } from "react";

function BgVideo() {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  useEffect(() => {
    const battery = navigator.webkitBattery || navigator.battery;
    if (battery && battery.level < 0.2) {
      setShouldRenderVideo(false);
    }
  }, []);

  return (
    <>
      {shouldRenderVideo && (
        <div className="bgvideo">
          <video src={video} autoPlay muted loop />
        </div>
      )}
    </>
  );
}

export default BgVideo;
