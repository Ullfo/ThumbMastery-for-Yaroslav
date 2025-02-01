import React from "react";

type AppRadioSelectProps = {
   name: string;
   ranges: string[];
   selectedValue: string;
   error: boolean;
   onChange: (range: string) => void;
};

const AppRadioSelect: React.FC<AppRadioSelectProps> = ({
   name,
   ranges,
   selectedValue,
   error = false,
   onChange,
}) => {
   return (
      <form className="space-y-1 mb-5">
         <h5 className="text-overline2 sm:text-b1 text-grey--600">{name}</h5>
         {ranges.map((range) => (
            <label
               key={range}
               className="flex items-center gap-2 cursor-pointer"
            >
               <input
                  type="radio"
                  value={range}
                  checked={selectedValue === range}
                  onChange={() => onChange(range)}
                  style={{
                     borderColor: error ? "#ce1821" : "",
                  }}
               />
               <span className="text-secondary--700 text-overline2">
                  {range}
               </span>
            </label>
         ))}
         {error && (
            <p className="px-5 text-overline1 text-error--600">
               please select answer
            </p>
         )}
      </form>
   );
};

export default AppRadioSelect;
