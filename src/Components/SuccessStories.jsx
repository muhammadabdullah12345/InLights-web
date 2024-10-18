import { GoArrowUpRight } from "react-icons/go";

function SuccessStories() {
  return (
    <div className="md:py-[80px] px-5 lg:px-[70px] md:pt-[120px] py-[30px] md:pb-[160px]">
      <p className="text-[30px] lg:text-[40px] font-semibold">
        Success Stories
      </p>
      <p className="opacity-70 text-[12px] lg:text-[14px]">
        Our Highly Qualified Team of Designers and Engineers create Tailored
        Solutions for Every Industry
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl bg-[#13171C] overflow-hidden">
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              Education
            </p>
            <img
              src="/images/bg-success1.png"
              className="h-[174px] rounded-[18px] w-full object-cover"
              alt="Education Project"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              Project 1
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities. Our intuitive maintenance
              management system enhances operational efficiency, allowing
              educational institutions to dedicate more time to student
              instruction...
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-[#13171C] overflow-hidden">
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              Manufacturing
            </p>
            <img
              src="/images/bg-success2.png"
              className="h-[174px] rounded-[18px] w-full object-cover"
              alt="Manufacturing Project"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              Project 2
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              Manufacturers are achieving remarkable gains in productivity and
              efficiency with Emerald’s innovative solutions. Our preventive
              maintenance system has notably increased equipment uptime...
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-[#13171C] overflow-hidden">
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              Health Care
            </p>
            <img
              src="/images/bg-success3.png"
              className="h-[174px] rounded-[18px] w-full object-cover"
              alt="Health Care Project"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              Project 3
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              Healthcare providers are witnessing notable enhancements in
              service quality and operational efficiency with Emerald’s
              cutting-edge platform. Our asset card system empowers healthcare
              facilities...
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
