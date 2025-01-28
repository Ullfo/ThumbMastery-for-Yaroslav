"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import AppButton from "@/components/AppButton/AppButton";
import man5 from "@/assets/images/man-5.png";
import man8 from "@/assets/images/man-8.png";
import man9 from "@/assets/images/man-9.png";
import man11 from "@/assets/images/man-11.png";
import man12 from "@/assets/images/man-12.png";
import man13 from "@/assets/images/man-13.png";
import BlurIcon from "@/assets/icons/blur.svg";
import CircleIcon from "@/assets/icons/circle.svg";

const HomeChannels: React.FC = () => {
   const topData = [
      {
         title: "Zero",
         description: "negative reviews",
      },
      {
         title: "5,000+ ",
         description: "thumbnails designed",
      },
      {
         title: "493 million+",
         description: "views generated",
      },
      {
         title: "$1.7M+",
         description: "of revenue for our clients",
      },
      {
         title: "100%",
         description: "success rate",
      },
   ];

   const botData = [
      {
         video: "/videos/Azoulay.mp4",
         image: man8,
         name: "King Azoulay",
         description: "434k subscribers",
      },
      {
         video: "/videos/MoVlogs.mp4",
         image: man9,
         name: "MoVlogs",
         description: "11.6M subscribers",
      },
      {
         video: "/videos/NathanNazareth.mp4",
         image: man5,
         name: "Nathan Nazareth",
         description: "319k subscribers",
      },
      {
         video: "/videos/AhmadMahmood.mp4",
         image: man11,
         name: "Ahmad Mahmood",
         description: "176k subscribers",
      },
      {
         video: "/videos/HarryBray.mp4",
         image: man12,
         name: "Harry Bray",
         description: "402k subscribers",
      },
      {
         video: "/videos/MikeyMelin.mp4",
         image: man13,
         name: "The BlueTick Show",
         description: "143k subscribers",
      },
   ];

   return (
      <section
         id="testimonials"
         className="flex flex-col items-center mb-9 sm:mb-[130px]"
      >
         <h3 className="pb-3 sm:pb-12 text-b2 sm:text-h3 text-center font-medium">
            Trusted by YouTube&#39;s biggest business channels
         </h3>
         <ul className="flex justify-center flex-wrap gap-2 sm:gap-5">
            {topData.map((item) => (
               <li
                  key={item.title}
                  className="flex flex-col justify-center text-center gap-1 sm:gap-3 py-5 sm:py-11 p-2 sm:px-4 bg-primary--50 rounded-[26px] min-w-[108px] sm:rounded-[48px] sm:w-[252px] shadow-shadow1"
               >
                  <h4 className="text-b1 sm:text-h2 font-bold text-grey--700 max-w-[94px] sm:max-w-full">
                     {item.title}
                  </h4>
                  <p className="text-overline1 sm:text-b2 sm:font-medium text-grey--600 max-w-[93px] sm:max-w-full">
                     {item.description}
                  </p>
               </li>
            ))}
         </ul>

         <div>
            <Marquee
               speed={90}
               pauseOnHover
               className="flex py-5 my-4 sm:my-[80px]"
            >
               {botData.map((item) => (
                  <li
                     key={item.name}
                     className="mx-2 list-none duration-100 hover:-translate-y-5"
                  >
                     <video
                        className=" rounded-[20px] h-[290px] sm:h-[550px] w-[164px] sm:w-[324px]"
                        controls
                        autoPlay
                        muted
                        loop
                        onMouseEnter={(e) => (e.currentTarget.muted = false)}
                        onMouseLeave={(e) => (e.currentTarget.muted = true)}
                        onClick={(e) => {
                           e.currentTarget.muted = false;
                           e.currentTarget.play();
                        }}
                     >
                        <source src={item.video} type="video/mp4" />
                     </video>
                     <div className="flex items-center gap-1 sm:gap-3 sm:pl-2 pt-2 sm:pt-7">
                        <Image
                           src={item.image}
                           alt={`Profile picture of ${item.name}`}
                           className="size-8 sm:size-[52px]"
                        />
                        <div>
                           <h5 className="text-overline2 sm:text-h4 sm:font-semibold">
                              {item.name}
                           </h5>
                           <p className="text-overline1 sm:text-b1">
                              {item.description}
                           </p>
                        </div>
                     </div>
                  </li>
               ))}
            </Marquee>
         </div>

         <div className="relative">
            <h3 className="pb-4 sm:pb-11 max-w-[1000px] text-b1 sm:text-h3 sm:font-bold text-grey--700">
               Every Tom, Dick, and Harry makes clickbait thumbnails, but the
               ones that actually drive sales focus on viewer psychology and
               proven, data-driven strategies.
            </h3>
            <p className="pb-6 sm:pb-9 max-w-[860px] text-overline2 sm:text-h4 text-grey--500">
               Don&#39;t waste your time struggling to make a thumbnail, only
               for it to flop.
               <br />
               <br /> No matter how good your content is, viewers won&#39;t
               click unless you give them a reason to do so.
               <br />
               <br />
               Attention spans get shorter by the day, so your goal must be to
               hook your ideal viewer from the start and keep them engaged until
               they buy your products and services.
            </p>
            <AppButton className="w-[220px] sm:w-[370px]">
               BOOST YOUR SALES
            </AppButton>

            <CircleIcon className="absolute sm:size-[300px] top-[-80px] left-[-230px] -z-10" />
            <BlurIcon className="absolute sm:size-96 sm:bottom-[-160px] sm:right-[-190px] -z-10" />
         </div>
      </section>
   );
};

export default HomeChannels;
