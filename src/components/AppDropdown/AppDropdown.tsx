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

   const handleClick = (): void => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      if (!contentRef.current) return;
      contentRef.current.style.maxHeight = isOpen
         ? `${contentRef.current.scrollHeight}px`
         : "";
   }, [isOpen]);

   return (
      <div
         className="bg-primary--100 overflow-hidden flex flex-col p-8 rounded-2xl cursor-pointer hover:shadow-lg md:p-4 md:rounded-2xl"
         role="button"
         onClick={handleClick}
      >
         <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">{title}</span>
            <span
               className={`duration-500 hover:opacity-50 ${
                  isOpen && "rotate-180"
               }`}
            >
               <ArrowCircleDown color="#003AD2" variant="Bulk" size={40} />
            </span>
         </div>
         <div
            className="max-h-0 overflow-hidden duration-300 mt-2 text-base"
            ref={contentRef}
         >
            <p>{content}</p>
         </div>
      </div>
   );
};

export default AppDropdown;
