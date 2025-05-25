// components/HeaderBar.js

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export default function HeaderBar() {
    return (
        <div className="w-full bg-[#f6a631] border-b border-gray-300 text-xs sm:text-sm text-white font-medium overflow-x-hidden">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                {/* Email - Truncate on very small screens */}
                <a
                    href="mailto:info@mahirgroupbd.com"
                    className="hover:underline transition duration-200 whitespace-nowrap truncate max-w-[180px] sm:max-w-none"
                    title="info@mahirgroupbd.com"
                >
                    info@mahirgroupbd.com
                </a>

                {/* Social Icons - Wrap on very small screens if needed */}
                <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
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
