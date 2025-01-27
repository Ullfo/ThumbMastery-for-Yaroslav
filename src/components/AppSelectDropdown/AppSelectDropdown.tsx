import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowCircleDown } from "iconsax-react";

export type Option = {
   label: string;
   flag?: string;
};

type AppSelectDropdownProps = {
   value: string;
   options: Option[];
   width?: string;
   label?: string;
   error: boolean;
   isOpen: boolean;
   placeholder?: string;
   onSelect: (value: string) => void;
   onClose: () => void;
};

const AppSelectDropdown: React.FC<AppSelectDropdownProps> = ({
   value,
   options,
   width,
   label,
   error = false,
   isOpen,
   placeholder = "None",
   onSelect,
   onClose,
}) => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   const dropdownRef = useRef<HTMLDivElement | null>(null);

   const handleSelect = (option: Option) => {
      onSelect(option.label);
      onClose();
   };

   const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
         const nextIndex = activeIndex !== null ? activeIndex + 1 : 0;
         setActiveIndex(nextIndex < options.length ? nextIndex : 0);
         e.preventDefault();
      } else if (e.key === "ArrowUp") {
         const nextIndex =
            activeIndex !== null ? activeIndex - 1 : options.length - 1;
         setActiveIndex(nextIndex < 0 ? options.length - 1 : nextIndex);
         e.preventDefault();
      } else if (e.key === "Enter" && activeIndex !== null) {
         handleSelect(options[activeIndex]);
      } else if (e.key === "Escape") {
         onClose();
      }
   };

   return (
      <div
         ref={dropdownRef}
         tabIndex={0}
         onKeyDown={handleKeyPress}
         className="relative w-full"
         style={{ maxWidth: width }}
      >
         {label && (
            <h5 className="text-overline2 sm:font-medium text-grey--600 mb-1 sm:mb-2 sm:whitespace-nowrap">
               {label}
            </h5>
         )}
         <button
            type="button"
            className={`${
               error ? "border-error--400" : "border-primary--400"
            } cursor-pointer flex justify-between items-center px-2 h-9 border rounded-[4px] shadow-sm w-full text-left  focus:!border-primary--500 focus:ring-1 focus:ring-primary--300 outline-none`}
            onClick={onClose}
            aria-haspopup="listbox"
            aria-expanded={isOpen ? "true" : "false"}
         >
            <span className={`text-overline2 ${!value && "text-grey--400"}`}>
               {options.find((option) => option.label === value)?.label ||
                  placeholder}
            </span>
            <ArrowCircleDown
               size={20}
               color="#01838B"
               variant="Bulk"
               className={`duration-500 hover:opacity-50 ${
                  isOpen && "rotate-180"
               }`}
            />
         </button>

         {isOpen && (
            <div
               role="listbox"
               className={`${
                  error ? "border-error--400" : "border-primary--400"
               } absolute top-full left-0 w-full mt-1 bg-white border rounded-[4px] shadow-lg max-h-60 overflow-auto z-10`}
            >
               {options.map((option, index) => (
                  <div
                     key={option.label || index}
                     role="option"
                     aria-selected={index === activeIndex ? "true" : "false"}
                     className={`flex items-center gap-2 p-2 cursor-pointer text-overline2 hover:bg-primary--100 ${
                        index === activeIndex ? "bg-gray-200" : ""
                     }`}
                     onClick={() => handleSelect(option)}
                  >
                     {option.flag && (
                        <Image
                           src={option.flag}
                           alt={`${option.label} flag`}
                           width={20}
                           height={15}
                        />
                     )}
                     {option.label}
                  </div>
               ))}
            </div>
         )}
         {error && (
            <p className="px-5 text-overline1 text-error--600">please select</p>
         )}
      </div>
   );
};

export default AppSelectDropdown;
