"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navigationLinks = [
  {
    id: "about",
    text: "About Us",
    path: "/about",
    icon: "info",
    isScroll: true,
    dropdown: false,
  },
  {
    id: "products",
    text: "Products",
    path: "/products",
    icon: "shopping_cart",
    isScroll: false,
    dropdown: false,
  },
  {
    id: "training",
    text: "Training",
    path: "/training",
    icon: "school",
    isScroll: false,
    dropdown: false,
  },
  {
    id: "blog",
    text: "Blog",
    path: "/blogs",
    icon: "rss_feed",
    isScroll: false,
    dropdown: false,
  },
  {
    id: "research",
    text: "R&D",
    path: "/#training",
    icon: "science",
    isScroll: true,
    dropdown: false,
  },
  {
    id: "services",
    text: "Services",
    path: "/#services",
    icon: "settings",
    isScroll: true,
    dropdown: false,
  },
  {
    id: "contact",
    text: "Contact Us",
    path: "/#contact",
    icon: "contact_support",
    isScroll: true,
    dropdown: false,
  },
];

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [sideNavVisible, setSideNavVisible] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    setActiveTab(pathname || "/");
  }, [pathname]);

  const toggleDropdown = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const toggleSideNav = () => {
    setSideNavVisible((prev) => !prev);
  };

  const scrollToSection = (id) => {
    setScrollTarget(id);
    router.push("/");
    setSideNavVisible(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSideNavVisible(false);
    }
    if (
      dropdownVisible &&
      !event.target.closest(".dropdown") &&
      !event.target.closest(".dropdown-toggle")
    ) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    if (sideNavVisible || dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavVisible, dropdownVisible]);

  const renderNavLink = (item) => {
    if (item.dropdown) {
      return (
        <div
          key={item.id}
          className="relative dropdown"
          onMouseEnter={() => setDropdownVisible(item.id)}
          onMouseLeave={() => setDropdownVisible(null)}
        >
          <button
            className={`mr-8 hover:text-orange-500 flex flex-row items-center justify-center dropdown-toggle relative group ${
              activeTab === item.path ? "text-orange-500" : ""
            }`}
            aria-expanded={dropdownVisible === item.id}
          >
            <span className="material-symbols-outlined mr-1">{item.icon}</span>
            {item.text}
            <span className="material-symbols-outlined">arrow_drop_down</span>
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <div
            className={`absolute bg-white shadow-lg rounded-lg mt-1 w-48 transition-all duration-300 z-50 ${
              dropdownVisible === item.id
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 invisible"
            } overflow-hidden`}
          >
            {item.dropdownItems.map((dropItem, idx) => (
              <Link
                key={idx}
                href={dropItem.path}
                className="px-4 py-3 hover:bg-gray-200 hover:text-orange-500 flex items-center"
                onClick={() => setDropdownVisible(null)}
              >
                <span className="material-symbols-outlined mr-2">
                  {dropItem.icon}
                </span>
                {dropItem.text}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        href={item.path || "#"}
        className={`mr-8 hover:text-orange-500 flex items-center justify-center relative group ${
          activeTab === item.path ? "text-orange-500" : ""
        }`}
        onClick={() => {
          if (item.isScroll) scrollToSection(item.id);
          setActiveTab(item.path || "/");
        }}
      >
        <span className="material-symbols-outlined mr-1">{item.icon}</span>
        {item.text}
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      </Link>
    );
  };

  const renderSideNavLink = (item) => {
    if (item.dropdown) {
      return (
        <div key={item.id} className="relative">
          <button
            className={`py-3 text-gray-700 hover:text-orange-500 w-full text-left flex items-center justify-between ${
              activeTab === item.path ? "text-orange-500" : ""
            }`}
            onClick={() => toggleDropdown(item.id)}
            aria-expanded={dropdownVisible === item.id}
          >
            <span className="flex items-center">
              <span className="material-symbols-outlined mr-3">
                {item.icon}
              </span>
              {item.text}
            </span>
            <span className="material-symbols-outlined">
              {dropdownVisible === item.id ? "expand_less" : "expand_more"}
            </span>
          </button>
          <div
            className={`ml-8 border-l border-orange-200 ${
              dropdownVisible === item.id ? "block" : "hidden"
            }`}
          >
            {item.dropdownItems.map((dropItem, idx) => (
              <Link
                key={idx}
                href={dropItem.path}
                className={`px-4 py-3 hover:text-orange-500 flex items-center ${
                  activeTab === dropItem.path
                    ? "text-orange-500"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  setSideNavVisible(false);
                  setActiveTab(dropItem.path);
                }}
              >
                <span className="material-symbols-outlined mr-2">
                  {dropItem.icon}
                </span>
                {dropItem.text}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        href={item.path || "#"}
        className={`py-3 hover:text-orange-500 flex items-center ${
          activeTab === item.path ? "text-orange-500" : "text-gray-700"
        }`}
        onClick={() => {
          if (item.isScroll) {
            scrollToSection(item.id);
          }
          setSideNavVisible(false);
          setActiveTab(item.path || "/");
        }}
      >
        <span className="material-symbols-outlined mr-3">{item.icon}</span>
        {item.text}
      </Link>
    );
  };

  return (
    <header
      className="text-gray-600 body-font shadow-md sticky top-0 left-0 bg-white"
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto flex flex-wrap px-5 md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 flex-col justify-center"
          onClick={() => setActiveTab("/")}
        >
          <Image
            src="/logo.gif"
            alt="logo"
            width={200}
            height={120}
            className="-mt-3"
            onLoad={() => setIsLogoLoaded(true)}
            priority
          />
        </Link>
        <nav className="md:ml-auto text-base flex-wrap items-center justify-center hidden md:flex">
          {navigationLinks.map(renderNavLink)}

          {/* <Link
            href="/login"
            className="inline-flex items-center text-orange-50 rounded-lg bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-300 text-base mt-4 md:mt-0"
          >
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link> */}
        </nav>
        <button
          className="md:hidden ml-auto bg-orange-500 text-white flex items-center justify-center p-2 rounded-lg side-nav-toggle"
          onClick={toggleSideNav}
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>

      {/* Side Navigation Bar with Sliding Animation */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ease-in-out ${
          sideNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSideNavVisible(false)}
      ></div>
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 bg-white flex flex-col justify-between w-full h-full shadow-md p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          sideNavVisible ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div>
          <div className="flex items-center justify-between mb-6 border-b pb-3">
            <Image
              src="/logo.gif"
              alt="logo"
              width={150}
              height={80}
              className=""
            />
            <button
              className="text-gray-800"
              onClick={toggleSideNav}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-xl text-white bg-orange-500 p-2 rounded-xl">
                close
              </span>
            </button>
          </div>
          <nav className="space-y-1">
            {navigationLinks.map(renderSideNavLink)}
          </nav>
        </div>

        {/* Get Started Button */}
        <div className="mt-6">
          {/* <Link
            href="/login"
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded bg-orange-500 text-white w-full"
            onClick={() => setSideNavVisible(false)}
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </Link> */}
          <div className="text-center text-sm text-gray-500 mt-4">
            You are in {activeTab === "/" ? "Home" : activeTab}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
