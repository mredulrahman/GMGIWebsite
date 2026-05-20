"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: "Home", url: "/" },
  {
    label: "About Us",
    items: [
      { label: "About Us", url: "/#about" },
      { label: "Mission & Vision", url: "/#mission-vision" },
      { label: "What Makes Us Different", url: "/#whatmakesusdifferent" },
      { label: "Our Expert Team", url: "/#our-expert-team" },
      { label: "Latest News", url: "/#latest-news" }
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
        url: "/#completed"
      }
    ]
  },
  {
    label: "Services",
    items: [
      { label: "One Stop Solutions", url: "/service/one-stop-solutions" },
      { label: "Research Solutions", url: "/service/research-solutons" },
      { label: "Mapping Solutions", url: "/service/mapping-solutions" },
      { label: "Software Solutions", url: "/service/gmgi-software-services" },
      { label: "Survey Solutions", url: "/service/survey-solutions" },
      { label: "HR Solutions", url: "/service/hr-solutions" },
      { label: "Training Solutions", url: "/service/training-solutions-2" }
    ]
  },
  {
    label: "Product",
    items: [
      {
        label: "Digital Product",
        items: [
          { label: "Dashboard", url: "/product/dashboard" },
          { label: "Apps", url: "/product/apps" },
          { label: "Website", url: "/product/website" },
          { label: "Graphics Design", url: "/product/graphics-design" },
          { label: "Videography", url: "/product/videography" }
        ]
      },
      { label: "Survey Equipment", url: "/#survey-equipment" },
      { label: "GeoLive", url: "/#geolive" }
    ]
  },
  { label: "Contact Us", url: "/contactUs" }
];


const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.25 },
    display: "block"
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: { duration: 0.25, delay: 0.04 },
    transitionEnd: { display: "none" }
  }
};


const DesktopNavItem = ({ item, isRoot = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasItems = item.items && item.items.length > 0;
  const pathname = usePathname();

  const handleClick = (e) => {
    if (item.url && item.url.startsWith('/#')) {
      const hash = item.url.split('#')[1];
      if (pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', item.url);
        }
      }
    }
    setIsHovered(false);
  };

  return (
    <div
      className={`relative ${isRoot ? 'px-9 py-2' : 'px-4 py-3 border-b border-white last:border-b-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.url || "#"}
        onClick={handleClick}
        className={`flex items-center justify-between gap-1 text-md no-underline hover:text-gray-200 transition-colors font-normal text-white`}>
        <span className={isRoot ? "whitespace-nowrap" : "whitespace-normal"}>{item.label}</span>
        {hasItems && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            stroke="white"
            strokeWidth="4"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isRoot ? '' : 'rotate-0'}`}
            style={{ transform: isRoot ? 'none' : 'rotate(-90deg)' }}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </Link>

      {hasItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={`absolute z-50 bg-[#25ABB9] shadow-xl w-56 ${isRoot ? 'top-full left-0 mt-1' : 'left-full top-0 -ml-1'
                }`}
              initial="exit"
              animate="enter"
              exit="exit"
              variants={subMenuAnimate}
              style={{ transformOrigin: "top center", perspective: "1000px" }}
            >
              <div className="flex flex-col py-1 ">
                {item.items.map((subItem, index) => (
                  <DesktopNavItem key={index} item={subItem} isRoot={false} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const MobileNavItem = ({ item, depth = 0, closeMenu }) => {
  const [open, setOpen] = useState(false);
  const hasItems = item.items && item.items.length > 0;
  const pathname = usePathname();

  const paddingLeft = depth === 0 ? 'pl-5' : depth === 1 ? 'pl-9' : 'pl-14';

  const handleClick = (e) => {
    e.stopPropagation();
    if (closeMenu) closeMenu();

    if (item.url && item.url.startsWith('/#')) {
      const hash = item.url.split('#')[1];
      if (pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', item.url);
        }
      }
    }
  };

  return (
    <div className="border-b border-white last:border-b-0">
      <button
        onClick={() => hasItems ? setOpen(o => !o) : undefined}
        className={`w-full flex items-center justify-between py-3.5 pr-5 text-white ${paddingLeft} text-md font-normal text-left`}
      >
        {hasItems ? (
          <span>{item.label}</span>
        ) : (
          <Link href={item.url || "#"} className="flex-1 no-underline text-white" onClick={handleClick}>
            {item.label}
          </Link>
        )}
        {hasItems && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            stroke="white"
            strokeWidth="4"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${open ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>

      {hasItems && (
        <>
          {open && (
            <div
              style={{ overflow: "hidden" }}
            >
              <div className="">
                {item.items.map((subItem, index) => (
                  <MobileNavItem key={index} item={subItem} depth={depth + 1} closeMenu={closeMenu} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="m15 9-6 6" /><path d="m9 9 6 6" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className="bg-linear-to-b from-[#1b2a7a] to-[#149fbd] shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-center h-20">
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item, index) => (
              <DesktopNavItem key={index} item={item} />
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <div className="flex absolute md:right-4 right-0">
            <a href='https://www.facebook.com/gmgisolutions' target="_blank"><svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#3B5998"></circle> <path fillRule="evenodd" clipRule="evenodd" d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white"></path> </g></svg></a>
            <a href='https://www.linkedin.com/company/gmgi-solutions-limited' target="_blank"><svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path> </g></svg></a>
            <a href='https://x.com/gmgisolutions' target="_blank"><svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle> <path fillRule="evenodd" clipRule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path> </g></svg></a>
            <a href='https://www.youtube.com/channel/UCRrdSfjFDWulDhLsl97Cxaw/featured' target="_blank"><svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#FF0000"></circle> <path fillRule="evenodd" clipRule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white"></path> </g></svg></a>
          </div >
        </div >
      </nav >
      {mobileOpen && (
        <div
          key="mobile-menu"
          style={{ overflow: "hidden" }}
          className="md:hidden sticky top-20 z-40 bg-[#25ABB9] shadow-xl"
        >
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <MobileNavItem key={index} item={item} depth={0} closeMenu={() => setMobileOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;