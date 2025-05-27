// components/HeaderBar.js

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export default function HeaderBar() {
  return (
    <div className="w-full bg-[#f6a631] border-b border-gray-300 text-xs sm:text-sm text-white font-medium">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-wrap justify-between items-center gap-y-2">
        
        {/* Email */}
        <div className="w-full sm:w-auto text-center">
          <a
            href="mailto:info@mahirgroupbd.com"
            className="hover:underline transition duration-200 break-all"
          >
            info@mahirgroupbd.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-3 flex-wrap">
          <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition duration-200">
            <FaFacebookF className="text-base sm:text-lg" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition duration-200">
            <FaLinkedinIn className="text-base sm:text-lg" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition duration-200">
            <FaInstagram className="text-base sm:text-lg" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-200 transition duration-200">
            <FaYoutube className="text-base sm:text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
