import { MdOutlineQueryStats } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";
// flex flex-wrap  items-center justify-center gap-[50px] lg:gap-[164px]
function MapPart() {
  return (
    <div className="bg-[#13171C] text-white md:py-[81px] relative py-[51px]">
      <div className="absolute inset-0 flex items-center justify-center ">
        <img
          src="/images/map.png"
          alt="map"
          className="md:w-full md:h-auto sm:max-w-[929px]  h-[350px] w-[614px]"
        />
      </div>
      <div className="grid grid-cols-2 md:gap-[164px] gap-[50px] md:grid-cols-4 px-[40px] md:px-[190px] items-center justify-center">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <MdOutlineQueryStats className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">03+</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Years of Growth
          </span>
        </div>
        <div className="flex flex-col gap-[10px] items-center  justify-center">
          <MdOutlineHomeWork className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">03</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Global Offices
          </span>
        </div>
        <div className="flex flex-col gap-[10px] items-center  justify-center">
          <MdOutlineEmojiObjects className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">06</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Digital Products Cultivated
          </span>
        </div>
        <div className="flex flex-col gap-[10px] items-center  justify-center">
          <MdOutlineAddReaction className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <p className="text-[20px] lg:text-[46px] font-semibold">92%</p>
          <p className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Customer Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default MapPart;
