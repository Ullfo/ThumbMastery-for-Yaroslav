import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import AppButton from "@/components/AppButton/AppButton";
import man1 from "@/assets/images/man-1.png";
import man2 from "@/assets/images/man-2.png";
import man3 from "@/assets/images/man-3.png";
import man4 from "@/assets/images/man-4.png";
import man5 from "@/assets/images/man-5.png";
import man6 from "@/assets/images/man-6.png";
import man7 from "@/assets/images/man-7.png";
import work1 from "@/assets/images/work-1.jpg";
import work2 from "@/assets/images/work-2.jpg";
import work3 from "@/assets/images/work-3.jpg";
import work4 from "@/assets/images/work-4.jpg";
import work5 from "@/assets/images/work-5.jpg";
import work6 from "@/assets/images/work-6.jpg";
import work7 from "@/assets/images/work-7.jpg";
import work8 from "@/assets/images/work-8.jpg";
import CircleIcon from "@/assets/icons/circle.svg";

const HomeOurwork: React.FC = () => {
   const dataTop = [
      {
         image: work1,
         avatar: man1,
         title: "“No One Can Stop Me” - Dwayne Johnson Opens Up On Trump, Hollywood, Vince McMahon & Father",
         channel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: work2,
         avatar: man2,
         title: "Making $10,888 every 24 hours - A day In The Life",
         channel: "Sebastian Ghiorghiu",
         views: "2M views",
      },
      {
         image: work3,
         avatar: man3,
         title: "How Girls Want You to TEXT THEM",
         channel: "Hamza Ahmed",
         views: "580k views",
      },
      {
         image: work4,
         avatar: man4,
         title: "I'm 57. If you're in your 20's please watch this.",
         channel: "Mark Tilbury",
         views: "3M views",
      },
   ];

   const dataBot = [
      {
         image: work8,
         avatar: man5,
         title: "I Tried Dropshipping For 7 Days To Prove It's Not Dead",
         channel: "Nathan Nazareth",
         views: "740k views",
      },
      {
         image: work6,
         avatar: man6,
         title: "Beginners Guide to Dropshipping in 2024 (18+ Hours)",
         channel: "Jordan Bown",
         views: "4M views",
      },
      {
         image: work5,
         avatar: man7,
         title: "ANDREW TATE: Reveals The Truth About The Matrix, Power & Wealth | CEOCAST EP. 77",
         channel: "CEOCAST",
         views: "5M views",
      },
      {
         image: work7,
         avatar: man2,
         title: "Sebb X Luke Belmar: The Simple Truth",
         channel: "Sebastian Ghiorghiu",
         views: "600k views",
      },
   ];

   return (
      <section
         id="portfolio"
         className="flex flex-col items-center mb-12 sm:mb-[100px]"
      >
         <h3 className="pb-1 sm:pb-4 text-center text-b1 sm:text-h2 font-medium sm:font-bold">
            Our work
         </h3>
         <h4 className="pb-3 sm:pb-12 max-w-56 sm:max-w-full text-center text-overline2 sm:text-h3 sm:font-medium text-grey--700">
            Recent thumbnails designed for top business channels.
         </h4>

         <Marquee speed={50} pauseOnHover className="-mr-12">
            <ul className="flex gap-2 sm:gap-4 mb-3 sm:mb-5 overflow-x-scroll scrollbar-hide mr-2 sm:mr-4">
               {dataTop.map((item) => (
                  <li key={item.title} className="flex-shrink-0">
                     <Image
                        src={item.image}
                        alt={`Youtube video ${item.title}`}
                        className="mb-2 sm:mb-3 rounded-lg sm:rounded-[42px] w-[164px] sm:w-[490px] h-[92px] sm:h-[280px]"
                     />
                     <div className="flex items-start gap-1 sm:gap-2 max-w-[490px]">
                        <Image
                           src={item.avatar}
                           alt={`Youtube channel ${item.channel}`}
                           className="size-[30px] sm:size-[42px]"
                        />
                        <div className="w-full text-grey--500">
                           <h5 className="mb-1 max-w-32 sm:max-w-full text-overline1 sm:text-b1 sm:font-bold line-clamp-2">
                              {item.title}
                           </h5>
                           <div className="flex justify-between sm:font-medium text-overline3 sm:text-b1 bg-primary--50 rounded-md px-[6px] p-[2px]">
                              <p>{item.channel}</p>
                              <p>{item.views}</p>
                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </Marquee>

         <Marquee speed={50} pauseOnHover direction="right" className="-ml-12">
            <ul className="flex gap-2 sm:gap-4 mb-12 sm:mb-[120px] flex-row-reverse overflow-x-scroll scrollbar-hide ml-2 sm:ml-4">
               {dataBot.map((item) => (
                  <li key={item.title} className="flex-shrink-0">
                     <Image
                        src={item.image}
                        alt={`Youtube video ${item.title}`}
                        className="mb-2 sm:mb-3 rounded-lg sm:rounded-[42px] w-[164px] sm:w-[490px] h-[92px] sm:h-[280px]"
                     />
                     <div className="flex items-start gap-1 sm:gap-2 max-w-[490px]">
                        <Image
                           src={item.avatar}
                           alt={`Youtube channel ${item.channel}`}
                           className="size-[30px] sm:size-[42px]"
                        />
                        <div className="w-full text-grey--500">
                           <h5 className="mb-1 max-w-32 sm:max-w-full text-overline1 sm:text-b1 sm:font-bold line-clamp-2">
                              {item.title}
                           </h5>
                           <div className="flex justify-between sm:font-medium text-overline3 sm:text-b1 bg-primary--50 rounded-md px-[6px] p-[2px]">
                              <p>{item.channel}</p>
                              <p>{item.views}</p>
                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </Marquee>

         <div className="relative flex flex-col items-center gap-4 sm:gap-7 py-6 sm:py-12 w-full max-w-[290px] sm:max-w-[820px] bg-gradient--2 rounded-[20px] sm:rounded-[32px] bg-[length:200%_200%] animate-gradientShift">
            <h3 className="text-center text-b2 sm:text-h2 font-bold ">
               Get started now
            </h3>
            <AppButton>START NOW</AppButton>
            <CircleIcon className="absolute mx-auto size-[250px] sm:size-[440px] top-[-40px] sm:top-[-75px] -z-10" />
         </div>
      </section>
   );
};

export default HomeOurwork;
