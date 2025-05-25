'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import { useI18n } from "@/app/contexts/i18n";
import { fetchPublicSettings } from "@/app/helper/backend";
import { useFetch } from "@/app/helper/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer4 = () => {
  const i18n = useI18n();
  const [setting] = useFetch(fetchPublicSettings);
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentYear(new Date().getFullYear());
    }
  }, []);

  const quickLinks = [
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Job", link: "/careers" },
  ];

  const productCatalog = [
    { name: "Main Product 1", link: "/product-1" },
    { name: "Main Product 2", link: "/product-2" },
    { name: "Main Product 3", link: "/product-3" },
  ];

  const contactInfo = [
    { label: "Phone", value: setting?.phone || "+8801321157438" },
    { label: "Email", value: setting?.email || "info@mahirgroupbd.com" },
    { label: "Email", value: setting?.email || "hr1@mahirgroupbd.com" },
    { label: "Address", value: setting?.address || "Head Office: House # 102, (2nd Floor), Road, Northern Rd, Dhaka 1206" },
  ];

  const navIcons = [
    { icon: FaLinkedinIn, link: setting?.social_media_link?.[3]?.link || "/" },
    { icon: FaInstagram, link: setting?.social_media_link?.[2]?.link || "/" },
    { icon: FaFacebookF, link: setting?.social_media_link?.[0]?.link || "/" },
    { icon: FaTwitter, link: setting?.social_media_link?.[1]?.link || "/" },
  ];

  return (
    <footer className="bg-[#FEF9E1] w-full py-8 sm:py-12 text-black px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src={setting?.site_logo || "/logo.png"}
            alt="Logo"
            width={140}
            height={36}
            className="mb-3 sm:mb-4 w-auto h-auto"
          />
          <p className="text-xs sm:text-sm text-[#525F7A] leading-relaxed">
            The Mahir Group is a leading manufacturer of garments accessories in Bangladesh,
            with a strong reputation for quality and excellence. It started in 2003 and has
            10 sister concerns.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
          <ul className="space-y-2 sm:space-y-3">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-primary transition-colors text-sm sm:text-base">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Catalog */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Catalog</h4>
          <ul className="space-y-2 sm:space-y-3">
            {productCatalog.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-primary transition-colors text-sm sm:text-base">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {contactInfo.map((item, idx) => (
              <li key={idx} className="break-words">
                <span className="font-medium">{item.label}: </span>
                {item.label === "Email" ? (
                  <a href={`mailto:${item.value}`} className="hover:text-primary break-all">
                    {item.value}
                  </a>
                ) : item.label === "Phone" ? (
                  <a href={`tel:${item.value}`} className="hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <span className="inline-block">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-8 sm:mt-10 border-t border-gray-300 pt-4 sm:pt-6 text-xs sm:text-sm flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-0">
        <p className="text-center sm:text-left">
          © {currentYear || new Date().getFullYear()} All rights reserved | Developed by{" "}
          <Link href="https://zaman-it.com" className="text-primary font-medium">
            ZAMAN IT
          </Link>
        </p>
        <div className="flex gap-2 sm:gap-3">
          {navIcons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/80 hover:bg-primary p-1.5 sm:p-2 rounded-md text-white transition-all"
              >
                <Icon size={14} className="sm:w-4 sm:h-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
