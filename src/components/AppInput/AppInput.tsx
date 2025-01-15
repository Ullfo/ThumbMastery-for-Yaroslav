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
}) => {
   return (
      <div className="w-full" style={{ maxWidth: width }}>
         {label && (
            <label
               htmlFor={name}
               className="font-medium text-grey--600 mb-2 whitespace-nowrap"
            >
               {label}
            </label>
         )}

         {textarea ? (
            <textarea
               name={name}
               value={value}
               placeholder={placeholder}
               className="block w-full border p-[6px] rounded-[4px] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-50 text-gray-900 resize-none"
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
               className="block w-full border p-[6px] rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
               onChange={onChange}
               onBlur={onBlur}
            />
         )}
      </div>
   );
};

export default AppInput;
