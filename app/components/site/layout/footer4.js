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
    <footer className="bg-[#FEF9E1] w-full py-12 text-black">
      <div className="agency-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <Image
            src={setting?.site_logo || "/logo.png"}
            alt="Logo"
            width={168}
            height={44}
            className="mb-4"
          />
          <p className="text-sm text-[#525F7A] leading-relaxed">
            The Mahir Group is a leading manufacturer of garments accessories in Bangladesh,
            with a strong reputation for quality and excellence. It started in 2003 and has
            10 sister concerns.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Catalog */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Product Catalog</h4>
          <ul className="space-y-3">
            {productCatalog.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            {contactInfo.map((item, idx) => (
              <li key={idx}>
                <span className="font-medium">{item.label}: </span>
                {item.label === "Email" ? (
                  <a href={`mailto:${item.value}`} className="hover:text-primary">
                    {item.value}
                  </a>
                ) : item.label === "Phone" ? (
                  <a href={`tel:${item.value}`} className="hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          © {currentYear || new Date().getFullYear()} All rights reserved | Developed by{" "}
          <Link href="https://zaman-it.com" className="text-primary font-medium">
            ZAMAN IT
          </Link>
        </p>
        <div className="flex gap-3 mt-4 md:mt-0">
          {navIcons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/80 hover:bg-primary p-2 rounded-md text-white transition-all"
              >
                <Icon size={16} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
