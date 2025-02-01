import React from "react";

export type AppInputProps = {
   type?: "text" | "tel" | "email";
   name?: string;
   value: string;
   label?: string;
   width?: string;
   height?: string;
   placeholder?: string;
   textarea?: boolean;
   error?: boolean;
   onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
   onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const AppInput: React.FC<AppInputProps> = ({
   type = "text",
   name,
   value,
   label,
   width,
   height,
   placeholder = "None",
   textarea = false,
   onChange = () => {},
   onBlur = () => {},
   error = false,
}) => {
   return (
      <div className="w-full" style={{ maxWidth: width }}>
         {label && (
            <h5 className="text-overline2 sm:text-b1 text-grey--600 mb-1 sm:mb-2 sm:whitespace-nowrap">
               {label}
            </h5>
         )}
         {textarea ? (
            <textarea
               name={name}
               value={value}
               placeholder={placeholder}
               className={`block w-full border ${
                  error ? "border-error--400" : "border-primary--400"
               } p-[6px] rounded-[4px] text-overline2 focus:!border-primary--500 focus:ring-1 focus:ring-primary--300 outline-none`}
               style={{ height }}
               onChange={onChange}
               onBlur={onBlur}
            />
         ) : (
            <input
               name={name}
               type={type}
               value={value}
               placeholder={placeholder}
               className={`block w-full border ${
                  error ? "border-error--400" : "border-primary--400"
               } px-[6px] h-9 rounded-[4px] text-overline2 focus:!border-primary--500 focus:ring-1 focus:ring-primary--300 outline-none`}
               onChange={onChange}
               onBlur={onBlur}
            />
         )}
         {error && (
            <p className="px-5 text-overline1 text-error--600">
               please fill in this field
            </p>
         )}
      </div>
   );
};

export default AppInput;
