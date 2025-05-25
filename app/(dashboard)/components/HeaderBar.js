// components/HeaderBar.js

import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export default function HeaderBar() {
    return (
        <div className="w-full bg-[#f6a631] border-b border-gray-300 text-sm text-white font-medium">
  <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
    {/* Email */}
    <a
      href="mailto:info@mahirgroupbd.com"
      className="hover:underline transition duration-200"
    >
      info@mahirgroupbd.com
    </a>

    {/* Social Icons */}
    <div className="flex space-x-4 text-white">
      <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition duration-200">
        <FaFacebookF className="text-lg" />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition duration-200">
        <FaLinkedinIn className="text-lg" />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition duration-200">
        <FaInstagram className="text-lg" />
      </a>
      <a href="#" aria-label="YouTube" className="hover:text-gray-200 transition duration-200">
        <FaYoutube className="text-lg" />
      </a>
    </div>
  </div>
</div>

    );
}
