"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const navItems = [
  { label: "Home" },
  {
    label: "About Us",
    items: [
      { label: "About Us" },
      { label: "Mission & Vision" },
      { label: "What Makes Us Different" },
      { label: "Our Expert Team" },
      { label: "Latest News" }
    ]
  },
  {
    label: "Project",
    items: [
      {
        label: "Potential",
        separator: true,
        items: [
          { label: "An integrated web portal to access data sources for public health planning in Bangladesh", url: "/project/an-integrated-web-portal-to-access-data-sources-for-public-health-planning-in-bangladesh" },
          { label: "Digital Map", url: "/project/digital-map" }
        ]
      },
      {
        label: "Ongoing",
        items: [{ label: "A pilot project on preparation of comprehensive development plan for nine upazilas", url: "/project/a-pilot-project-on-preparation-of-comprehensive-development-plan-for-nine-upazilas" }]
      },
      {
        label: "Completed",
        // items: []  
      }
    ]
  },
  {
    label: "Services",
    items: [
      { label: "One Stop Solutions" },
      { label: "Research Solutions" },
      { label: "Mapping Solutions" },
      { label: "Software Solutions" },
      { label: "Survey Solutions" },
      { label: "HR Solutions" },
      { label: "Training Solutions" }
    ]
  },
  {
    label: "Product",
    items: [
      {
        label: "Digital Product",
        items: [
          { label: "Dashboard" },
          { label: "Apps" },
          { label: "Website" },
          { label: "Graphics Design" },
          { label: "Videography" }
        ]
      },
      {
        label: "Survey Equipment"
      },
      {
        label: "GeoLive"
      }
    ]
  },
  { label: "Contact Us" }
];

// Animation variants for the dropdown container
const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.3,
    },
    display: "block"
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.3,
      delay: 0.05 // Reduced delay for snappier feel
    },
    transitionEnd: {
      display: "none"
    }
  }
};

const NavItem = ({ item, isRoot = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasItems = item.items && item.items.length > 0;

  return (
    <div
      className={`relative ${isRoot ? 'px-4 py-2' : 'px-4 py-3'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.url || "#"}
        className={`flex items-center justify-between gap-4 no-underline hover:text-gray-200 transition-colors ${isRoot ? 'font-semibold text-white' : 'text-white text-sm'}`}
      >
        <span className={isRoot ? "whitespace-nowrap" : "whitespace-normal"}>{item.label}</span>
        {hasItems && (
          <i className={`pi ${isRoot ? 'pi-angle-down' : 'pi-angle-right'} text-xs text-white`} />
        )}
      </Link>

      {hasItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={`absolute z-50 bg-[#25ABB9] border border-cyan-600/30 shadow-xl w-64 md:w-55 ${isRoot ? 'top-full left-0 mt-1' : 'left-full top-0 -ml-1'
                }`}
              initial="exit"
              animate="enter"
              exit="exit"
              variants={subMenuAnimate}
              style={{ transformOrigin: "top center", perspective: "1000px" }}
            >
              <div className="flex flex-col py-1">
                {item.items.map((subItem, index) => (
                  <NavItem key={index} item={subItem} isRoot={false} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar bg-linear-to-b from-[#1b2a7a] to-[#149fbd] shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-2 h-full">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;