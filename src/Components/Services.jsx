import { GoArrowUpRight } from "react-icons/go";

function Services() {
  return (
    <div className="sm:mt-20 mt-5 bg-gradient-to-r from-black via-[#022c37] to-black filter blur-[1000] md:pt-[120px] py-[30px] md:pb-[160px] px-[16px] min-h-[713px] w-full  lg:px-[70px] ">
      <div className="text-white">
        <p className="text-[30px] lg:text-[40px] font-semibold">Our Services</p>
        <p className="opacity-70 text-[12px] lg:text-[14px]">
          Our Highly Qualified Team of Designers and Engineers create Tailored
          Solutions for Every Industry
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 justify-items-center">
          <div className="rounded-[28px] p-[20px] lg:p-[24px] bg-[#FCFEFE] w-full h-auto">
            <img
              src="/images/service1.png"
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
              alt="Service 1"
            />
            <p className="text-[16px] lg:text-[18px] font-semibold mt-2 text-black">
              Web Development
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#52616D] mt-2">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-[#0E92AE] text-[12px] mt-4 flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div className="rounded-[28px] p-[20px] lg:p-[24px] bg-[#FCFEFE] w-full h-auto ">
            <img
              src="/images/service2.png"
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
              alt="Service 2"
            />
            <p className="text-[16px] lg:text-[18px] font-semibold mt-2 text-black">
              Product Design
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#52616D] mt-2">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-[#0E92AE] text-[12px] mt-4 flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div className="rounded-[28px] p-[20px] lg:p-[24px] bg-[#FCFEFE] w-full h-auto ">
            <img
              src="/images/service3.png"
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
              alt="Service 3"
            />
            <p className="text-[16px] lg:text-[18px] font-semibold mt-2 text-black">
              Computer Vision
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#52616D] mt-2">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-[#0E92AE] text-[12px] mt-4 flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div className="rounded-[28px] p-[20px] lg:p-[24px] bg-[#FCFEFE] w-full h-auto ">
            <img
              src="/images/service4.png"
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
              alt="Service 4"
            />
            <p className="text-[16px] lg:text-[18px] font-semibold mt-2 text-black">
              AI Automation
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#52616D] mt-2">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-[#0E92AE] text-[12px] mt-4 flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
