import { IoIosArrowDown } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex items-center justify-between relative cursor-pointer">
      <div>
        <img src="/images/Group.png" className="pl-[120px] h-[18px] w-auto" />
      </div>
      <div className="flex items-center justify-center gap-6 text-white">
        <div>Home</div>

        {/* Services with dropdown */}
        <div className="relative group">
          <div className="flex items-center justify-center gap-[4px]">
            <span>Services</span>
            <IoIosArrowDown />
          </div>

          {/* Dropdown content */}
          <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
            <p className="text-[18px] font-semibold">
              Custom Product Development
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service1.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Web Development</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service2.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Product Design</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
            <p className="text-[18px] font-semibold mt-5">
              Artificial Intelligence
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service3.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Computer Vision</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service4.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">AI Automation</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
          </div>
        </div>
        {/* Services with dropdown */}
        <div className="relative group">
          <div className="flex items-center justify-center gap-[4px]">
            <span>Our Products</span>
            <IoIosArrowDown />
          </div>

          {/* Dropdown content */}
          <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
            <p className="text-[18px] font-semibold">
              Custom Product Development
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service1.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Web Development</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service2.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Product Design</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
            <p className="text-[18px] font-semibold mt-5">
              Artificial Intelligence
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service3.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Computer Vision</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service4.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">AI Automation</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
          </div>
        </div>
        {/* Services with dropdown */}
        <div className="relative group">
          <div className="flex items-center justify-center gap-[4px]">
            <span>Company</span>
            <IoIosArrowDown />
          </div>

          {/* Dropdown content */}
          <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
            <p className="text-[18px] font-semibold">
              Custom Product Development
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service1.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Web Development</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service2.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Product Design</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
            <p className="text-[18px] font-semibold mt-5">
              Artificial Intelligence
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service3.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">Computer Vision</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <img src="/images/service4.png" className="h-[28px] w-[28px]" />
              <p className="text-[18px] font-semibold mt-2">AI Automation</p>
            </div>
            <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction. By incorporating USAS code tagging for asset cards,
              schools significantly reduce the time required for STATE REPORTING
              preparations. Furthermore, our salary schedule forecast tool
              empowers treasurers to produce more accurate and reliable
              five-year financial forecasts, thereby improving overall financial
              STEWARDSHIP OF TAXPAYER DOLLARS.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center py-[10px] px-5 rounded-xl mr-[120px] my-3 gap-2 text-white"
        style={{ backgroundColor: "#1AA8C6" }}
      >
        <button>Lets Talk</button>
        <FaLocationArrow />
      </div>
    </div>
  );
}

export default Navbar;
