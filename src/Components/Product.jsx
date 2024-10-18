import { GoArrowUpRight } from "react-icons/go";

function Product() {
  return (
    <div className="mx-5 lg:mx-10 my-10 lg:my-20">
      <div className=" lg:text-left">
        <p className="text-[30px] lg:text-[40px] font-semibold">Our Products</p>
        <p className="text-[12px] lg:text-[14px] mt-2">
          Our Highly Qualified Team of Designers and Engineers Created Tailored
          Solutions for Every Industry
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-[24px] sm:mt-10 mt-5 gap-[5px]">
        <div className="px-5 lg:px-[34px] pt-5 lg:pt-[34px] pb-0 bg-[#13171C] my-5 rounded-[20px] lg:rounded-[34px] relative w-full  lg:w-[50%]">
          <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
            Traffic Management
          </span>
          <div className="text-white text-[24px] lg:text-[34px] mt-5 lg:mt-10">
            <p>Manage City Traffic with the</p>
            <p>Help Of AI</p>
          </div>
          <p className="text-white text-[14px] lg:text-[16px] mt-5 lg:mt-10">
            InLights revolutionizes your planning with advanced forecasting
            tools. Anticipate needs, schedule proactively, and optimize
            resources to keep operations running smoothly.
          </p>
          <p className="text-white text-[12px] lg:text-[14px] mt-5 lg:mt-7 flex items-center gap-[6px]">
            <span>Explore More</span>
            <GoArrowUpRight />
          </p>
          <img
            src="/images/product2.png"
            alt="product1"
            className="w-full lg:w-[80%] h-auto mt-5 lg:mt-10"
          />
        </div>

        <div className="px-5 lg:px-[34px] pt-5 lg:pt-[34px] pb-0 bg-[#13171C] my-5 rounded-[20px] lg:rounded-[34px] relative w-full lg:w-[50%] ">
          <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
            Traffic Management
          </span>
          <div className="text-white text-[24px] lg:text-[34px] mt-5 lg:mt-10">
            <p>Manage City Traffic with the</p>
            <p>Help Of AI</p>
          </div>
          <p className="text-white text-[14px] lg:text-[16px] mt-5 lg:mt-10">
            InLights revolutionizes your planning with advanced forecasting
            tools. Anticipate needs, schedule proactively, and optimize
            resources to keep operations running smoothly.
          </p>
          <p className="text-white text-[10px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px]">
            <span>Explore More</span>
            <GoArrowUpRight />
          </p>
          <img
            src="/images/product2.png"
            alt="product1"
            className="w-full lg:w-[80%] h-auto mt-5 lg:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
