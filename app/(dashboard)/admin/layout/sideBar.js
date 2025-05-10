'use client';
import Link from "next/link";
import { use, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/app/contexts/i18n";

const Sidebar = ({ menu }) => {
  const i18n = useI18n();

  useEffect(() => {
    const items = document.querySelectorAll(".menu > li");

    const handleToggle = (e) => {
      e.preventDefault();
      const link = e.currentTarget;
      const submenu = link.nextElementSibling;

      if (submenu) {
        link.classList.toggle("active");
        submenu.classList.toggle("active");
        submenu.style.maxHeight = submenu.classList.contains("active")
          ? submenu.scrollHeight + "px"
          : 0;
      }
    };

    items.forEach((item) => {
      let link = item.querySelector(".nav-link-sub.has-arrow");
      if (link) {
        link.addEventListener("click", handleToggle);
      }
    });

    return () => {
      // Cleanup event listeners
      items.forEach((item) => {
        let link = item.querySelector(".nav-link-sub.has-arrow");
        if (link) {
          link.removeEventListener("click", handleToggle);
        }
      });
    };
  }, []);

 

  const pathName = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll(".menu a");
    let activeItem;

    items.forEach((item) => {
      item.classList.remove("active");
      const itemParent = item.closest(".submenu");

      if (itemParent) {
        itemParent.classList.remove("active");
        itemParent.style.maxHeight = 0;
        itemParent.parentElement
          .querySelector(".nav-link-sub.has-arrow")
          ?.classList?.remove("active");
      }

      if (item.href === window.location.href) {
        activeItem = item;
      }
    });

    if (activeItem) {
      activeItem.classList.add("active");
      const itemParent = activeItem.closest(".submenu");

      if (itemParent) {
        itemParent.classList.add("active");
        itemParent.style.maxHeight = itemParent.scrollHeight + "px";
        itemParent.parentElement
          .querySelector(".nav-link-sub.has-arrow")
          ?.classList?.add("active");
      }
    }
  }, [pathName]);

  return (
    <>  
      <div
        onClick={() => {
          window.document.querySelector(".sidebar").classList.toggle("open");
          window.document
            .querySelector(".sidebar-overlay")
            .classList.toggle("open");
        }}
        className="sidebar-overlay"
      />
      <div className="sidebar !z-20 overflow-y-scroll">
        <ul className="menu h-full -mt-4">
          {menu?.map((item, index) => (
            <li key={index}>
              {item.menu && (
                <div className="nav-menu">{i18n.t(item.menu)}</div>
              )}
              {item.label && !item.child && (
                <Link
                  href={item.href || "#!"}
                  className="nav-link"
                  onClick={() => {
                    window.document
                      .querySelector(".sidebar")
                      .classList.toggle("open");
                    window.document
                      .querySelector(".sidebar-overlay")
                      .classList.toggle("open");
                  }}
                >
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  <span className="description-1">{i18n.t(item.label)}</span>
                </Link>
              )}
              {item.child && (
                <>
                  <a role="button" className="nav-link-sub has-arrow">
                    {item.icon && (
                      <span className="text-base">{item.icon}</span>
                    )}
                    <span className="description-1">{i18n.t(item.label)}</span>
                  </a>
                  <ul className="submenu">
                    {item.child.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href || "#!"}
                          className="nav-link"
                          onClick={() => {
                            window.document
                              .querySelector(".sidebar")
                              .classList.toggle("open");
                            window.document
                              .querySelector(".sidebar-overlay")
                              .classList.toggle("open");
                          }}
                        >
                          {item.icon && (
                            <span className="text-base">{item.icon}</span>
                          )}
                          <span className="description-1">{i18n.t(item.label)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
