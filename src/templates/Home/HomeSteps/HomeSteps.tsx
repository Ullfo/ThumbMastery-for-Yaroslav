import React from "react";
import cn from "classnames";

import AppButton from "@/components/AppButton/AppButton";
import ArrowsIcon from "@/assets/icons/arrows-down.svg";

const HomeSteps: React.FC = () => {
   const data = [
      {
         text: "Fill out the form",
      },
      {
         text: "We’ll reach out to you as soon as possible",
      },
      {
         text: "If you qualify, we’ll discuss a fair price & you’ll get access to a designer on Slack",
      },
      {
         text: "You give us information & assets for your next video",
      },
      {
         text: "We send you the thumbnails & titles ASAP",
      },
      {
         text: "Revisions & split-testing",
      },
      {
         text: "A video with higher CTR, views and revenue",
      },
   ];
   return (
      <section className="flex flex-col items-center gap-10 mb-[100px]">
         <h3 className="text-h2 font-bold">Here are your next steps</h3>
         <ul className="relative grid grid-cols-2 gap-y-12 gap-x-64">
            {data.map((item, index) => (
               <li
                  key={item.text}
                  className={cn("flex items-center gap-10", {
                     "flex-row-reverse pt-14": index % 2 > 0,
                  })}
               >
                  <span className="text-9xl text-primary--200">
                     {index + 1}
                  </span>
                  {index === 0 ? (
                     <div className="flex flex-col items-center gap-5 mx-auto">
                        <p className="text-h4 text-center font-semibold max-w-[360px]">
                           {item.text}
                        </p>
                        <AppButton width="150px" variant="secondary">
                           APPLY
                        </AppButton>
                     </div>
                  ) : (
                     <p className="text-h4 text-center font-semibold max-w-[360px]">
                        {item.text}
                     </p>
                  )}
               </li>
            ))}
            <ArrowsIcon className="absolute left-1/2 top-3" />
         </ul>

         <AppButton width="310px">START NOW</AppButton>
      </section>
   );
};

export default HomeSteps;
