import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import footerLogo from "/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 rounded-3xl mt-10">
      <div className="max-w-7xl mx-auto text-center py-12">
        {/* LOGO & TEXT */}
        <div className="flex flex-col items-center gap-3">
          <img src={footerLogo} alt="ZapShift Logo" className="" />

          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* LINE */}
        <div className="border-t border-dashed border-[#03464D] my-8"></div>

        {/* MENU ITEMS */}
        <div className="flex flex-wrap gap-6 justify-center text-gray-300 text-sm md:text-base">
          <span className="cursor-pointer hover:text-white">Services</span>
          <span className="cursor-pointer hover:text-white">Coverage</span>
          <span className="cursor-pointer hover:text-white">About Us</span>
          <span className="cursor-pointer hover:text-white">Pricing</span>
          <span className="cursor-pointer hover:text-white">Blog</span>
          <span className="cursor-pointer hover:text-white">Contact</span>
        </div>

        {/* LINE */}
        <div className="border-b border-dashed border-[#03464D] my-8"></div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6">
          <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <FaLinkedinIn className="text-xl" />
          </div>
          <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <RxCross2 className="text-xl" />
          </div>
          <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <FaFacebookF className="text-xl" />
          </div>
          <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
