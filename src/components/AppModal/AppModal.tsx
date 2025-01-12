import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import useNoScroll from "@/hooks/useNoScroll";
import AppButton from "../AppButton/AppButton";

interface AppModalProps {
   visible: boolean;
   width?: string;
   onClose: () => void;
   children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({
   visible,
   width = "600px",
   onClose,
   children,
}) => {
   useNoScroll(visible);

   const nodeRef = useRef<HTMLDivElement>(null);

   return (
      <CSSTransition
         in={visible}
         timeout={200}
         unmountOnExit
         classNames={{
            enter: "opacity-0",
            enterActive: "opacity-100 transition-opacity duration-300",
         }}
         nodeRef={nodeRef}
      >
         <div
            ref={nodeRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onPointerDown={onClose}
         >
            <div
               className="relative bg-white rounded-[20px] p-8 max-h-[calc(100%-64px)] overflow-y-auto w-[calc(100%-64px)] sm:p-4 sm:max-w-[calc(100%-32px)] animate-scale-in"
               style={{ width }}
               onPointerDown={(e) => e.stopPropagation()}
            >
               <div className="absolute top-4 right-4">
                  <AppButton iconButton onClick={onClose}>
                     X
                  </AppButton>
               </div>

               {children}
            </div>
         </div>
      </CSSTransition>
   );
};

export default AppModal;

// Tailwind-specific animation (add this to your global CSS file or Tailwind config)
// In tailwind.config.js, extend the animations like this:
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         'scale-in': {
//           '0%': { transform: 'scale(0.9)' },
//           '100%': { transform: 'scale(1)' },
//         },
//       },
//       animation: {
//         'scale-in': 'scale-in 300ms ease-in-out',
//       },
//     },
//   },
// }
