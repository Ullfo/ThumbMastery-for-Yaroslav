import React from "react";
import {
   GalleryFavorite,
   SecurityTime,
   TimerStart,
   Designtools,
   VideoPlay,
   VideoOctagon,
} from "iconsax-react";

import AppButton from "@/components/AppButton/AppButton";

const HomeBring: React.FC = () => {
   const data = [
      {
         image: GalleryFavorite,
         title: "Custom cash-generating thumbnails",
         description:
            "We dive deep into what works in your industry to increase your CTR and sales from the first thumbnail.",
      },
      {
         image: SecurityTime,
         title: "Save time and effort",
         description:
            "Don’t spend hours on your video packaging. Just focus on creating great videos - we’ll handle the rest.",
      },
      {
         image: TimerStart,
         title: "Speed and precision",
         description:
            "We have a 100% success rate and always deliver on time, with zero bad reviews. We treat each client with top priority, delivering your designs with speed and accuracy.",
      },
      {
         image: Designtools,
         title: "Complete video packaging",
         description:
            "We’ll also completely take care of your titles. We’ll come up with many different titles for each video & split-test them along with the thumbnail variations.",
      },
      {
         image: VideoPlay,
         title: "Split-testing your video packaging",
         description:
            "80% of YouTube channels don’t know how to do this right. Proper split testing reveals what drives your target audience to click the video.",
      },
      {
         image: VideoOctagon,
         title: "YouTube expertise + viewer psychology",
         description:
            "Our designs have generated over $1.7M in revenue because we tap into key psychological triggers that make people click & buy.",
      },
   ];
   return (
      <section
         id="services"
         className="flex flex-col items-center gap-[14px] sm:gap-[42px] mb-9 sm:mb-[100px]"
      >
         <h3 className="font-poppins text-b1 sm:text-h2 text-center font-medium sm:font-bold">
            What do we bring to the table?
         </h3>
         <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 pb-1 sm:pb-0">
            {data.map((item) => (
               <li
                  key={item.title}
                  className="flex flex-col items-center text-center gap-3 sm:gap-5 max-w-[420px] rounded-3xl bg-primary--100 py-3 sm:py-8 px-2 sm:px-5"
               >
                  <item.image //
                     color="#003AD2"
                     variant="Bulk"
                     className="size-[60px] sm:size-[100px]"
                  />
                  <h4 className="text-b1 sm:text-h3 font-medium text-grey--700">
                     {item.title}
                  </h4>
                  <p className="text-overline1 sm:text-b1 text-grey--600">
                     {item.description}
                  </p>
               </li>
            ))}
         </ul>
         <AppButton className="w-[275px] sm:w-[370px]">
            SKYROCKET YOUR GROWTH
         </AppButton>
      </section>
   );
};

export default HomeBring;
