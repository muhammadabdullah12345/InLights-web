import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi"; // Import hamburger menu icon
import { AiOutlineClose } from "react-icons/ai"; // Import close icon for the sidebar
import { GoArrowUpRight } from "react-icons/go";

function BgVideoPart() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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

      {/* Navbar */}
      <div className="relative z-10">
        {/* Hamburger Menu for smaller screens */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3 bg-opacity-60 bg-black">
          <img
            src="/images/Group.png"
            className="h-[12px] w-auto sm:h-[18px]"
          />
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <AiOutlineClose className="text-white" size={30} />
            ) : (
              <HiMenu className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Sidebar for smaller screens */}
        <div
          className={`fixed z-50 top-0 left-0 w-64 h-full bg-black bg-opacity-90 text-white transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="p-4">
            <button className="text-white" onClick={toggleSidebar}>
              <AiOutlineClose size={30} />
            </button>
            <nav className="mt-6">
              <ul className="flex flex-col gap-4">
                <li>Home</li>
                <li className="relative group">
                  <div className="flex items-center gap-2">
                    <span>Services</span>
                    <IoIosArrowDown />
                  </div>
                  {/* Dropdown content */}
                  <div className="hidden group-hover:block bg-white text-black rounded-lg mt-2 p-4 shadow-lg">
                    {/* Content of the dropdown */}
                    <p>Custom Product Development</p>
                    {/* ...other content */}
                  </div>
                </li>
                <li className="relative group">
                  <div className="flex items-center gap-2">
                    <span>Our Products</span>
                    <IoIosArrowDown />
                  </div>
                  {/* Dropdown content */}
                  <div className="hidden group-hover:block bg-white text-black rounded-lg mt-2 p-4 shadow-lg">
                    {/* Content of the dropdown */}
                    <p>Custom Product Development</p>
                    {/* ...other content */}
                  </div>
                </li>
                <li>Company</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Full navbar for larger screens */}
        <div className="hidden lg:flex items-center justify-between px-10 py-3 text-white">
          <div>
            <img src="/images/Group.png" className="h-[18px] w-auto" />
          </div>
          <nav className="flex items-center gap-6">
            <div>Home</div>

            <div className="relative group">
              <div className="flex items-center gap-2">
                <span>Services</span>
                <IoIosArrowDown />
              </div>
              <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
                <p className="text-[18px] font-semibold">
                  Custom Product Development
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service1.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Web Development
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service2.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Product Design
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
                <p className="text-[18px] font-semibold mt-5">
                  Artificial Intelligence
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service3.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Computer Vision
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service4.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    AI Automation
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-2">
                <span>Our Products</span>
                <IoIosArrowDown />
              </div>
              <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
                <p className="text-[18px] font-semibold">
                  Custom Product Development
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service1.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Web Development
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service2.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Product Design
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
                <p className="text-[18px] font-semibold mt-5">
                  Artificial Intelligence
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service3.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Computer Vision
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service4.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    AI Automation
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-2">
                <span>Company</span>
                <IoIosArrowDown />
              </div>
              <div className="absolute hidden group-hover:block bg-white text-black rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
                <p className="text-[18px] font-semibold">
                  Custom Product Development
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service1.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Web Development
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service2.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Product Design
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
                <p className="text-[18px] font-semibold mt-5">
                  Artificial Intelligence
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service3.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    Computer Vision
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <img
                    src="/images/service4.png"
                    className="h-[28px] w-[28px]"
                  />
                  <p className="text-[18px] font-semibold mt-2">
                    AI Automation
                  </p>
                </div>
                <p className="text-[14px] text-[#52616D] mt-2 line-clamp-3">
                  Emerald Data Solutions is revolutionizing the way schools and
                  universities manage their facilities. Our intuitive
                  maintenance management system enhances operational efficiency,
                  allowing educational institutions to dedicate more time to
                  student instruction. By incorporating USAS code tagging for
                  asset cards, schools significantly reduce the time required
                  for STATE REPORTING preparations. Furthermore, our salary
                  schedule forecast tool empowers treasurers to produce more
                  accurate and reliable five-year financial forecasts, thereby
                  improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
                </p>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2 py-2 px-5 bg-[#1AA8C6] rounded-xl">
            <button>Let's Talk</button>
            <GoArrowUpRight />
          </div>
        </div>

        {/* Herosection */}
        <div className="flex items-center justify-center mt-[120px] sm:mt-[160px] flex-col text-center px-[16px]">
          <p className="text-[24px] font-bold text-white sm:text-[46px]">
            Leveraging{" "}
            <span className="text-primary">Artificial Intelligence</span> to
          </p>
          <p className="text-[24px] font-bold text-white sm:text-[46px]">
            Make Cities Smarter
          </p>
          <p className="text-[12px] font-semibold opacity-90 text-white sm:text-[18px] mt-3">
            AI is the core of everything we do
          </p>
          <button className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-[35px] bg-[#1AA8C6] shadow-xl rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 ">
            <span>Contact Us</span>
            <GoArrowUpRight />
          </button>

          <div className="flex items-center justify-center sm:mt-[35px] mt-[60px] opacity-90 text-white text-[12px] sm:text-[16px]">
            TRUSTED BY
          </div>
          <div className="flex items-center justify-center gap-10 mt-2">
            <img
              src="/images/hero-1.png"
              className="h-[13px] w-[50px] sm:h-[26px] sm:w-[100px]"
            />
            <img
              src="/images/hero-2.png"
              className="h-[21px] w-[21px] sm:h-[42px] sm:w-[42px]"
            />
            <img
              src="/images/hero-3.png"
              className="h-[20px] w-[43px] sm:h-[40px] sm:w-[85px]"
            />
          </div>
          <div className="flex items-center justify-center mt-[35px] opacity-90 text-white sm:text-[16px] text-[12px] ">
            AWARDS
          </div>
          <div className="flex items-center justify-center gap-10  mb-[60px] sm:mb-[35px]">
            <img
              src="/images/hero-3.png"
              className="h-[20px] w-[43px] sm:h-[40px] sm:w-[85px]"
            />
            <img
              src="/images/hero-4.png"
              className="h-[12px] w-[53px] sm:h-[24px] sm:w-[107px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgVideoPart;
