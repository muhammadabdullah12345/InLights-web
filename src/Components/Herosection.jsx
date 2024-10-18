import { FaLocationArrow } from "react-icons/fa6";
function Herosection() {
  return (
    <div className="flex items-center justify-center mt-[161px]  flex-col ">
      <p className="text-[46px] font-bold text-white">
        Laveraging
        <span className="text-primary"> Artificial Intelligence </span> to
      </p>
      <p className="text-46px font-bold text-white">Make Cities Smarter</p>
      <p className="text-18px font-semibold opacity-90 text-white">
        AI is the core of everything we do
      </p>
      <button className="flex items-center justify-center py-3 px-5 rounded-xl gap-2 text-white mt-[35px] bg-[#1AA8C6] shadow-xl">
        <span>Contact Us</span>
        <FaLocationArrow />
      </button>

      <div className="flex items-center justify-center mt-[35px] opacity-90 text-white">
        TRUSTED BY
      </div>
      <div className="flex items-center justify-center gap-10 mt-2">
        <img src="/images/hero-1.png" />
        <img src="/images/hero-2.png" />
        <img src="/images/hero-3.png" />
      </div>
      <div className="flex items-center justify-center mt-[35px] opacity-90 text-white">
        Awards
      </div>
      <div className="flex items-center justify-center gap-10 mb-[25px] ">
        <img src="/images/hero-3.png" />
        <img src="/images/hero-4.png" />
      </div>
    </div>
  );
}

export default Herosection;
