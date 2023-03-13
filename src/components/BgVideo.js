import video from "../assets/video.mp4";

function BgVideo() {
  return (
    <div className="bgvideo">
      <video type="video/mp4" src={video} autoPlay muted loop playsInline />
    </div>
  );
}

export default BgVideo;
