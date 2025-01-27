"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/images/Logo.png";

const PageFooter: React.FC = () => {
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

   return (
      <footer className="flex flex-col-reverse lg:flex-row gap-4 xl:gap-0 items-center sm:justify-between py-3 sm:py-9">
         <Link href="/">
            <Image
               src={Logo}
               alt="Logo"
               width={230}
               height={65}
               className=" w-44 h-12 sm:w-[230px] sm:h-16"
            />
         </Link>

         <nav className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-primary--50 rounded-[28px] py-2 px-10 lg:px-10">
            {tabs.map((tab) => (
               <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="relative px-3 py-2 text-btn2 text-grey--800 group"
               >
                  {tab.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient--3 transition-all duration-300 group-hover:w-full"></span>
               </button>
            ))}
         </nav>
      </footer>
   );
};

export default PageFooter;
