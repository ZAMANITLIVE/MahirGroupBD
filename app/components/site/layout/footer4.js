'use client';
import { useI18n } from "@/app/contexts/i18n";
import { fetchPublicSettings } from "@/app/helper/backend";
import { useFetch } from "@/app/helper/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer4 = () => {
  const i18n = useI18n();
  const [setting] = useFetch(fetchPublicSettings);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
    { name: "Privacy Policy", link: "/privacy" },
  ];

  const productCatalog = [
    { name: "Garment Accessories", link: "/products/accessories" },
    { name: "Textile Solutions", link: "/products/textiles" },
    { name: "Packaging Materials", link: "/products/packaging" },
    { name: "Quality Certifications", link: "/quality" },
  ];

  const socialIcons = [
    { icon: FaLinkedinIn, link: setting?.social_media_link?.[3]?.link || "#", label: "LinkedIn" },
    { icon: FaInstagram, link: setting?.social_media_link?.[2]?.link || "#", label: "Instagram" },
    { icon: FaFacebookF, link: setting?.social_media_link?.[0]?.link || "#", label: "Facebook" },
    { icon: FaTwitter, link: setting?.social_media_link?.[1]?.link || "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#F8F5E8] text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={setting?.site_logo || "/logo.png"}
                alt={`${setting?.site_name || 'Mahir Group'} Logo`}
                width={180}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-600">
              A leading manufacturer of premium garment accessories in Bangladesh since 2003, 
              Mahir Group operates 10 sister concerns with a commitment to quality and innovation.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.link} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-start"
                  >
                    <span className="border-b border-transparent hover:border-primary">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-3">
              {productCatalog.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.link} 
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-start"
                  >
                    <span className="border-b border-transparent hover:border-primary">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 uppercase tracking-wider">Contact Us</h3>
            <address className="not-italic space-y-4 text-gray-600">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-primary" />
                <span>{setting?.address || "Head Office: House #102, (2nd Floor), Northern Rd, Dhaka 1206, Bangladesh"}</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 flex-shrink-0 text-primary" />
                <a href={`tel:${setting?.phone || '+8801321157438'}`} className="hover:text-primary transition-colors">
                  {setting?.phone || '+880 1321-157438'}
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-primary" />
                <a href={`mailto:${setting?.email || 'info@mahirgroupbd.com'}`} className="hover:text-primary transition-colors">
                  {setting?.email || 'info@mahirgroupbd.com'}
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0 text-primary" />
                <a href={`mailto:hr@mahirgroupbd.com`} className="hover:text-primary transition-colors">
                  hr@mahirgroupbd.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} {setting?.site_name || 'Mahir Group'}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Developed by{' '}
            <Link 
              href="https://zaman-it.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ZAMAN IT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;