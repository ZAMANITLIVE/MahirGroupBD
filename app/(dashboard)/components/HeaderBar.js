// components/HeaderBar.js

"use client";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa6";

export default function HeaderBar() {
  return (
    <div className="w-full bg-[#f6a631] border-b border-gray-300 text-white text-xs sm:text-sm font-medium shadow-md overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 py-1 flex flex-col sm:flex-row items-center justify-between gap-y-1 overflow-x-hidden w-full">
        
        {/* Email Section */}
        <div className="flex items-center gap-2 text-center sm:text-left break-all max-w-full">
          <FaEnvelope className="text-white text-sm sm:text-base shrink-0" />
          <a
            href="mailto:info@mahirgroupbd.com"
            className="hover:underline transition duration-200 break-all"
          >
            info@mahirgroupbd.com
          </a>
        </div>

        {/* Social Icons Section */}
        <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap w-full sm:w-auto">
          {[
            { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#1877F2" },
            { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", color: "#0A66C2" },
            { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#E4405F" },
            { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#FF0000" },
          ].map(({ icon, href, label, color }, index) => (
            <a
              key={index}
              href={href}
              aria-label={label}
              className="p-1.5 rounded-full border border-white/20 bg-white/10 shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
              style={{ color }}
            >
              <div className="text-sm sm:text-base">{icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
