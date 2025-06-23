// components/HeaderBar.js

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa6"; // Add FaEnvelope

export default function HeaderBar() {
  return (
    <div className="w-full bg-[#f6a631] border-b border-gray-300 text-xs sm:text-sm text-white font-medium shadow-md">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex flex-wrap justify-between items-center gap-y-2">
        
        {/* Email */}
        <div className="w-full sm:w-auto text-center flex justify-center items-center gap-2">
          <FaEnvelope className="text-white text-base sm:text-lg" />
          <a
            href="mailto:info@mahirgroupbd.com"
            className="hover:underline transition duration-200 break-all"
          >
            info@mahirgroupbd.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-3 flex-wrap">
          {[
            { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#1877F2" },
            { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", color: "#0A66C2" },
            { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#E4405F" },
            { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#FF0000" },
          ].map(({ icon, href, label, color }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              className="text-white bg-white/10 p-2 rounded-full shadow-md border border-white/20 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-white"
              style={{
                color: color,
              }}
            >
              <div className="text-base sm:text-lg">{icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
