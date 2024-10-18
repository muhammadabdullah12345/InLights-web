import Herosection from "./Herosection";
import Navbar from "./Navbar";

function BgVideoPart() {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className="w-full h-full absolute inset-0 object-cover"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <Navbar />
        <Herosection />
      </div>
    </div>
  );
}

export default BgVideoPart;
