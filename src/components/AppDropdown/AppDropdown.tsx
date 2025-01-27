"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowCircleDown } from "iconsax-react";

export type AppDropdownProps = {
   title: string;
   content: string;
};

const AppDropdown: React.FC<AppDropdownProps> = ({ content, title }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const contentRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!contentRef.current) return;
      contentRef.current.style.maxHeight = isOpen
         ? `${contentRef.current.scrollHeight}px`
         : "";
   }, [isOpen]);

   return (
      <div
         role="button"
         className="bg-primary--100 overflow-hidden flex flex-col justify-center rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-8 cursor-pointer hover:shadow-lg"
         onClick={() => setIsOpen(!isOpen)}
      >
         <div className="flex items-center justify-between">
            <span className="text-b1 sm:text-h4 font-medium sm:font-semibold max-w-[280px] sm:max-w-[500px] text-grey--800">
               {title}
            </span>

            <ArrowCircleDown
               color="#003AD2"
               variant="Bulk"
               className={`size-[30px] sm:size-10 duration-500 hover:opacity-50 ${
                  isOpen && "rotate-180"
               }`}
            />
         </div>
         <div ref={contentRef} className="max-h-0 overflow-hidden duration-300">
            <p className="text-overline2 sm:text-b2 mt-2">{content}</p>
         </div>
      </div>
   );
};

export default AppDropdown;
