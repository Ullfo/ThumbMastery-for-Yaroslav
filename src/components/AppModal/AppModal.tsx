import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CloseSquare } from "iconsax-react";

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
               className="relative bg-white rounded-[20px] p-8 sm:p-8 sm:max-w-[calc(100%-32px)]"
               style={{ width }}
               onPointerDown={(e) => e.stopPropagation()}
            >
               <CloseSquare
                  size={48}
                  variant="Bulk"
                  color="#01838B"
                  className="absolute top-8 right-8 cursor-pointer"
                  onClick={onClose}
               />

               {children}
            </div>
         </div>
      </CSSTransition>
   );
};

export default AppModal;
