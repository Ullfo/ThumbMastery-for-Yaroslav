"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HambergerMenu, CloseSquare } from "iconsax-react";

import Logo from "@/assets/images/Logo.png";
import AppButton from "@/components/AppButton/AppButton";
import HomeModal from "@/templates/Home/HomeModal/HomeModal";

const PageHeader: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isDeviceLarge, setIsDeviceLarge] = useState(true);

   const tabs = [
      { name: "TESTIMONIALS", id: "testimonials" },
      { name: "SERVICES", id: "services" },
      { name: "PORTFOLIO", id: "portfolio" },
      { name: "ABOUT US", id: "about-us" },
      { name: "FAQ", id: "faq" },
   ];

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         const offsetPosition = element.offsetTop - 50;
         window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
   };

   useEffect(() => {
      const checkScreenWidth = () => {
         if (window.innerWidth < 1160) setIsDeviceLarge(false);
         else setIsDeviceLarge(true);
      };

      checkScreenWidth();

      window.addEventListener("resize", checkScreenWidth);

      return () => window.removeEventListener("resize", checkScreenWidth);
   }, []);

   return (
      <header className="flex items-center justify-between py-3 sm:py-7 xl:pr-11">
         <HomeModal
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
         />

         <Link href="/">
            <Image
               src={Logo}
               alt="Logo"
               width={140}
               height={42}
               className="sm:w-56 sm:h-16"
            />
         </Link>

         {isDeviceLarge ? (
            <>
               <nav className="flex gap-4 bg-primary--50 rounded-[28px] py-2 px-5">
                  {tabs.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className="relative px-3 py-2 group"
                     >
                        {tab.name}
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient--3 transition-all duration-300 group-hover:w-full"></span>
                     </button>
                  ))}
               </nav>
               <AppButton
                  onClick={() => setIsModalOpen(true)}
                  width="210px"
                  variant="secondary"
               >
                  START NOW
               </AppButton>
            </>
         ) : (
            <>
               {isMenuOpen ? (
                  <CloseSquare
                     size={44}
                     variant="Bulk"
                     color="#91F9FF"
                     className="cursor-pointer"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
               ) : (
                  <HambergerMenu
                     size={44}
                     variant="Bulk"
                     color="#91F9FF"
                     className="cursor-pointer"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
               )}

               <div
                  className={`absolute flex flex-col items-center gap-6 top-[80px] sm:top-[120px] w-full right-0 bg-white shadow-lg pb-24 rounded-lg z-10 duration-300 ${
                     isMenuOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-10 opacity-0 pointer-events-none"
                  }`}
               >
                  <nav className="flex flex-col gap-2">
                     {tabs.map((tab) => (
                        <button
                           key={tab.id}
                           onClick={() => {
                              scrollToSection(tab.id);
                              setIsMenuOpen(false);
                           }}
                           className="relative px-5 py-2 group"
                        >
                           {tab.name}
                           <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary--700 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                     ))}
                  </nav>
                  <AppButton
                     onClick={() => {
                        setIsModalOpen(true);
                        setIsMenuOpen(false);
                     }}
                     width="210px"
                     variant="secondary"
                  >
                     BOOK A CALL
                  </AppButton>
               </div>
            </>
         )}
      </header>
   );
};

export default PageHeader;
