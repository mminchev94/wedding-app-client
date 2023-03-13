import video from "../assets/video.mp4";

function BgVideo() {
  return (
    <div className="bgvideo">
      <video src={video} autoPlay muted loop playsInline />
    </div>
  );
}

export default BgVideo;
