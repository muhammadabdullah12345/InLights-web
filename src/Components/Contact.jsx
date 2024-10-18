import { GoArrowUpRight } from "react-icons/go";

function Contact() {
  return (
    <div className="px-[24px] py-[32px] lg:p-[48px] bg-[#13171C] md:rounded-[40px] rounded-[24px] flex items-center justify-center h-auto lg:h-[585px] mx-5 lg:mx-[70px] md:my-[80px] my-[40px]">
      <div className="w-full lg:w-[533px] ">
        <p className="md:text-[24px] text-[16px] lg:text-[40px] text-white">
          Ready to Boost Your Efficiency?
        </p>

        <div className="flex items-center justify-center lg:justify-start md:py-3 md:px-5 px-3 py-2 md:rounded-xl rounded-[6px] gap-2 text-white md:mt-[35px] mt-[25px] bg-[#1AA8C6] w-fit ">
          <button>Contact Us</button>
          <GoArrowUpRight />
        </div>
      </div>
      <img
        src="/images/contact.png"
        className="h-[104px] w-[140px] lg:h-auto lg:w-auto md:h-[200px] md:w-[240px]"
        alt="Contact"
      />
    </div>
  );
}

export default Contact;
