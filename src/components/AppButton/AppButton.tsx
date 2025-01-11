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
}) => {
   const baseClasses =
      "rounded-[28px] relative inline-flex justify-center items-center text-center whitespace-nowrap transition-all cursor-pointer";
   const sizeClasses = {
      sm: "px-5 py-2.5 font-normal",
      md: "px-7 py-4 font-medium text-btn",
   };
   const variantClasses = {
      primary:
         "bg-secondary--200 text-white bg-purple-500 border-3 border-purple-500 hover:bg-purple-700 hover:border-purple-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-transparent",
      secondary:
         "bg-primary--200 text-black border-3 border-purple-500 hover:border-purple-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200",
   };
   const iconButtonClasses = "p-2 hover:bg-gray-200 disabled:bg-gray-100";

   const className = cn(
      baseClasses,
      iconButton ? iconButtonClasses : sizeClasses[size],
      variantClasses[variant],
      block && "w-full",
      disabled && "pointer-events-none"
   );

   return (
      <button
         type={type}
         className={className}
         disabled={disabled}
         onClick={onClick}
         style={{ width }}
      >
         {children}
      </button>
   );
};

export default AppButton;
