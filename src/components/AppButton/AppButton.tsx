"use client";

import React from "react";
import cn from "classnames";

export type AppButtonProps = {
   variant?: "primary" | "secondary";
   size?: "sm" | "md";
   type?: "button" | "submit" | "reset";
   children: React.ReactNode;
   width?: string;
   disabled?: boolean;
   block?: boolean;
   onClick?: () => void;
   iconButton?: boolean;
   className?: string;
};

const AppButton: React.FC<AppButtonProps> = ({
   variant = "primary",
   size = "md",
   type = "button",
   children,
   width,
   disabled,
   block,
   onClick,
   iconButton = false,
   className,
}) => {
   const baseClasses =
      "text-btn2 sm:text-btn p-[7px] sm:py-2.5 rounded-[28px] border-[3px] hover:ring-[2px]";
   const sizeClasses = {
      sm: "px-5 font-normal",
      md: "px-5 sm:px-7 sm:font-medium",
   };
   const variantClasses = {
      primary:
         "bg-secondary--200 text-white border-secondary--200 hover:bg-secondary--400 hover:border-secondary--300 hover:ring-secondary--100",
      secondary:
         "bg-primary--200 text-black border-primary--200 hover:bg-primary--300 hover:border-primary--200 hover:ring-primary--50",
   };
   const iconButtonClasses = "p-2 hover:bg-gray-200 disabled:bg-gray-100";

   const AllClasses = cn(
      baseClasses,
      iconButton ? iconButtonClasses : sizeClasses[size],
      variantClasses[variant],
      block && "w-full",
      disabled && "pointer-events-none",
      className
   );

   return (
      <button
         type={type}
         className={AllClasses}
         disabled={disabled}
         onClick={onClick}
         style={{ width }}
      >
         {children}
      </button>
   );
};

export default AppButton;
