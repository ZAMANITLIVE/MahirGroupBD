// components/HeaderBar.js

import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export default function HeaderBar() {
    return (
        <div className="w-full bg-[#f6a631] border-b border-gray-300 text-xs sm:text-sm text-white font-medium">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
                {/* Email - Now centered on mobile */}
                <a
                    href="mailto:info@mahirgroupbd.com"
                    className="hover:underline transition duration-200 whitespace-nowrap"
                >
                    info@mahirgroupbd.com
                </a>

                {/* Social Icons - Stacked on mobile if needed */}
                <div className="flex space-x-3 sm:space-x-4">
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
