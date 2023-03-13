import video from "../assets/video.mp4";

function BgVideo() {
  return (
    <div className="bgvideo">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsinline="true"
        preload="metadata"
        disablePictureInPicture="true"
      />
    </div>
  );
}

export default BgVideo;
