/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Divider, Dropdown, Menu, message, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/user";
import { useI18n } from "@/app/contexts/i18n";
import { GrLanguage } from "react-icons/gr";
import HeaderBar from "@/app/(dashboard)/components/HeaderBar";

const Navbar = ({
  bgColor = "bg-transparent",
  textColor = "text-textMain",
  bgImage,
  isHomepage,
}) => {
  const i18n = useI18n();
  const defaultLang = i18n?.languages?.find((lang) => lang?.default)?.name;
  const langFromLocalStorage =
    typeof localStorage !== "undefined" ? localStorage.getItem("lang") : null;

  const { user, setUser, getCurrentUser } = useUser();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const items = [
    {
      key: "/",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Home",
    },

    {
      key: "/about",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "About",
      children: [
        {
          label: "Board of Directors",
          key: "/board-of-directors",
        },
        {
          key: "/management-team",
          label: "Management Team",
        },
        {
          key: "/our-mission/vision",
          label: "Our Mission/Vision",
        },
        {
          key: "/history",
          label: "History",
        },

      ],
    },


    {
      key: "/concern",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Concern",
      children: [
        {
          label: "Netrakona Accessories Ltd",
          key: "/netrakona-accessories-ltd",
        },
        {
          key: "/pack-asia-BD-ltd",
          label: "Pack Asia BD Ltd",
        },
        {
          key: "/o-pack-bd-ltd",
          label: "O Pack BD Ltd",
        },
        {
          label: "Trade Max",
          key: "/trade-max",
        },
        {
          key: "/mahir-steeltech-Ltd",
          label: "Mahir Steeltech Ltd",
        },
        {
          key: "/m-n-quality-agro",
          label: "M N Quality Agro",
        },

      ],
    },

    {
      key: "/product",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Products",
      children: [
        {
          key: "/product/twill-tape",
          label: "Twill Tape",
          
        },
        {
          key: "/product/drawstring",
          label: "Drawstring",
        },
        {
          key: "/product/elastic",
          label: "Elastic",
        },
        {
          key: "/product/poly",
          label: "Poly",
        },
        {
          key: "/product/gum-tape",
          label: "Gum Tape",
        },
        {
          key: "/product/carton",
          label: "Carton",
        },
        {
          key: "/product/zipper",
          label: "Zipper",
        },
        {
          key: "/product/metal-button",
          label: "Metal Button",
        },

      ],
    },


    {
      key: "/imageGallery",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Gallery",
    },

    {
      key: "/contact",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Contact",
    },
    {
      key: "/careers",
      icon: <FaRegCircle className=" !bg-primary !text-primary rounded-full" />,
      label: "Career",
    },




  ];

  const [openKeys, setOpenKeys] = useState([]);
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const handleMenuClick = (e) => {
    router.push(e.key);
    setOpen(false);
  };

  const itemsMunu = (
    <Menu
      onClick={handleMenuClick}
      style={{
        width: "100%",
        backgroundColor: "transparent",
        color: "textMain",
        border: "none",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "semibold",
      }}
      mode="horizontal"
      items={items}
    />
  );

  const userMenuItems = [
    user?.role === "admin" || user?.role === "employee"
      ? {
        key: "dashboard",
        label: i18n.t("Dashboard"),
        onClick: () => router.push("/admin"),
      }
      : {
        key: "userDashboard",
        label: i18n.t("Dashboard"),
        onClick: () => router.push("/user"),
      },
    {
      key: "logout",
      label: i18n.t("Logout"),
      onClick: () => {
        localStorage.removeItem("token");
        router.push("/login");
        message.success(i18n?.t("Logged out successfully"));
        setUser(null);
      },
    },
  ];

  return (
    <>
      <HeaderBar />
      <div className={`w-full h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] relative ${bgColor}`}>
        <div className="agency-container pt-6 relative z-20">
          <nav className="flex items-center justify-between bg-transparent">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 text-xl">
                {bgImage ? (
                  <div className="!h-[28px] !w-[110px] sm:!h-[30px] sm:!w-[260px] lg:!h-[32px] lg:!w-[150px] xl:!h-[40px] xl:!w-[240px]">
                    <Image
                      src={bgImage}
                      width={280}
                      height={50}
                      alt="logo"
                      priority
                      className="!h-[28px] !w-[110px] sm:!h-[30px] sm:!w-[260px] lg:!h-[32px] lg:!w-[150px] xl:!h-[40px] xl:!w-[240px] sm:mt-1"
                    />
                  </div>
                ) : (
                  <div className="!h-[28px] !w-[110px] sm:!h-[40px] sm:!w-[240px] sm:mt-1">
                    <Image
                      src="/logo.png"
                      width={250}
                      height={50}
                      alt="logo"
                      priority
                      className="!h-[28px] !w-[110px] sm:!h-[40px] sm:!w-[180px] sm:mt-1"
                    />
                  </div>
                )}
              </Link>
            </div>

            <div
              className={`lg:w-full hidden lg:block font-inter ${textColor === "text-[#ffffff]" ? "menuitem2" : "menuitem1"
                }`}
            >
              {itemsMunu}
            </div>

            <div className="flex items-center gap-1 sm:gap-3 relative !z-50">
              {user?._id ? (
                <Dropdown
                  menu={{ items: userMenuItems }}
                  placement="bottomRight"
                  trigger={["hover"]}
                >
                  <button className="flex mr-1 relative items-center">
                    <div>
                      {user?.image ? (
                        <Image
                          src={user?.image}
                          width={40}
                          height={40}
                          alt="user"
                          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[40px] rounded-full"
                        />
                      ) : (
                        <FcBusinessman className="text-xl sm:text-2xl rounded-full" />
                      )}
                    </div>
                  </button>
                </Dropdown>
              ) : (
                <Link href="/login" className={``}>
                  {/* Login Button (optional) */}
                </Link>
              )}

              <RiMenuFill
                onClick={() => setOpen(!open)}
                className={`block ${textColor} text-textMain lg:hidden`}
              />
              {open && (
                <div
                  className="lg:hidden absolute z-50 top-10 sm:top-12 md:top-14 right-0 bg-white shadow-custom-light w-[160px] sm:w-[180px] md:w-[200px] pb-6"
                  ref={ref}
                >
                  <Menu
                    onClick={handleMenuClick}
                    onOpenChange={handleOpenChange}
                    openKeys={openKeys}
                    mode="vertical"
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      color: "black",
                      border: "none",
                      padding: "0px",
                    }}
                    items={items}
                  />
                </div>
              )}
            </div>
          </nav>
        </div>

        <div
          className={`${isHomepage !== true || bgColor === "bg-[#070713]"
            ? "divider1"
            : "divider2"
            }`}
        >
          <Divider
            className={`absolute bottom-0 z-50 ${isHomepage ? "hidden" : "block"
              }`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
