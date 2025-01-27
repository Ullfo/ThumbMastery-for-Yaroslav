import React from "react";
import cn from "classnames";

import AppButton from "@/components/AppButton/AppButton";
import ArrowsIcon from "@/assets/icons/arrows-down.svg";
import CircleDouble from "@/assets/icons/circle-double.svg";

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
      <section className="relative flex flex-col items-center gap-4 sm:gap-10 mb-9 sm:mb-[100px]">
         <h3 className="text-b1 sm:text-h2 font-medium sm:font-bold">
            Here are your next steps
         </h3>
         <ul className="relative grid grid-cols-2 gap-y-4 sm:gap-y-12 gap-x-9 sm:gap-x-32 lg:gap-x-64">
            {data.map((item, index) => (
               <li
                  key={item.text}
                  className={cn(
                     "flex items-center gap-1 sm:gap-5 lg:gap-10 min-h-[106px]",
                     {
                        "flex-row-reverse pt-11 sm:pt-14": index % 2 > 0,
                     }
                  )}
               >
                  <span className="text-4xl sm:text-9xl text-primary--200 ">
                     {index + 1}
                  </span>
                  {index === 0 ? (
                     <div className="flex flex-col items-center gap-5 mx-auto">
                        <p className="text-overline2 sm:text-b2 lg:text-h4 text-center sm:font-semibold max-w-[360px]">
                           {item.text}
                        </p>
                        <AppButton
                           variant="secondary"
                           className="w-[100px] sm:w-[150px]"
                        >
                           APPLY
                        </AppButton>
                     </div>
                  ) : (
                     <p className="text-overline2 sm:text-b2 lg:text-h4 text-center sm:font-semibold max-w-[360px] text-grey--800">
                        {item.text}
                     </p>
                  )}
               </li>
            ))}
            <ArrowsIcon className="absolute left-[47%] sm:left-[49%] top-3 sm:top-3 w-[22px] h-[460px] sm:h-[830px]" />
         </ul>

         <AppButton className="w-[150px] sm:w-[310px]">START NOW</AppButton>

         <CircleDouble className="absolute bottom-[10px] sm:bottom-0 xl:bottom-[-70px] right-1 lg:right-[150px] w-[170px] h-[160px] sm:w-[300px] sm:h-[280px] xl:w-[400px] xl:h-[380px] -z-10" />
      </section>
   );
};

export default HomeSteps;
