import React, { useState, useEffect } from "react";
import { ArrowCircleDown } from "iconsax-react";

export type SelectDropdownProps = {
   value: string;
   options: string[];
   width?: string;
   label?: string;
   placeholder?: string;
   onSelect: (value: string) => void;
   onClose: () => void;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
   value,
   options,
   onSelect,
   onClose,
   width,
   label,
   placeholder = "None",
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleSelect = (text: string) => {
      onSelect(text);
      setIsOpen(false);
      onClose();
   };

   const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
         const nextIndex = activeIndex !== null ? activeIndex + 1 : 0;
         setActiveIndex(nextIndex < options.length ? nextIndex : 0);
      } else if (e.key === "ArrowUp") {
         const nextIndex =
            activeIndex !== null ? activeIndex - 1 : options.length - 1;
         setActiveIndex(nextIndex < 0 ? options.length - 1 : nextIndex);
      } else if (e.key === "Enter" && activeIndex !== null) {
         handleSelect(options[activeIndex]);
      } else if (e.key === "Escape") {
         setIsOpen(false);
         onClose();
      }
   };

   useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
   }, [activeIndex]);

   return (
      <div className="relative w-full" style={{ maxWidth: width }}>
         {label && (
            <label className="font-medium text-grey--600 mb-2 whitespace-nowrap">
               {label}
            </label>
         )}
         <button
            type="button"
            className="cursor-pointer flex justify-between items-center p-2 border rounded-lg shadow-sm w-full text-left"
            onClick={toggleDropdown}
            aria-haspopup="listbox"
            aria-expanded={isOpen ? "true" : "false"}
         >
            <span className={value ? "" : "text-gray-400"}>
               {options.find((option) => option === value) || placeholder}
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
               className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-10"
            >
               {options.map((option, index) => (
                  <div
                     key={option}
                     role="option"
                     aria-selected={index === activeIndex ? "true" : "false"}
                     className={`p-2 cursor-pointer hover:bg-gray-100 ${
                        index === activeIndex ? "bg-gray-200" : ""
                     }`}
                     onClick={() => handleSelect(option)}
                  >
                     {option}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectDropdown;
