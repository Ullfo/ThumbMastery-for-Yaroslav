"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import AppButton from "@/components/AppButton/AppButton";
import HomeModal from "../HomeModal/HomeModal";
import man1 from "@/assets/images/man-1.png";
import man2 from "@/assets/images/man-2.png";
import man3 from "@/assets/images/man-3.png";
import man4 from "@/assets/images/man-4.png";
import man5 from "@/assets/images/man-5.png";
import man6 from "@/assets/images/man-6.png";
import man7 from "@/assets/images/man-7.png";
import man8 from "@/assets/images/man-8.png";
import man9 from "@/assets/images/man-9.png";
import man10 from "@/assets/images/man-10.png";
import man11 from "@/assets/images/man-11.png";
import man12 from "@/assets/images/man-12.png";
import CircleLeft from "@/assets/icons/circle-left.svg";
import CircleRight from "@/assets/icons/circle-right.svg";

const HomeHero: React.FC = () => {
   const [isModaOpen, setIsModalOpen] = useState(false);

   const data = [
      {
         name: "Jordan Bown",
         description: "284k subscribers",
         image: man6,
         link: "https://www.youtube.com/@JordanBown",
      },
      {
         name: "CEOCAST",
         description: "268k subscribers",
         image: man7,
         link: "https://www.youtube.com/@ceocast",
      },
      {
         name: "PBD Podcast",
         description: "2.43M subscribers",
         image: man1,
         link: "https://www.youtube.com/@PBDPodcast",
      },
      {
         name: "Harry Bray",
         description: "402k subscribers",
         image: man12,
         link: "https://www.youtube.com/@StandOutTV_",
      },
      {
         name: "Ahmad Mahmood",
         description: "176k subscribers",
         image: man11,
         link: "https://www.youtube.com/@AhmadMahmoodShow",
      },
      {
         name: "Artur Rehi",
         description: "708k subscribers",
         image: man10,
         link: "https://www.youtube.com/@arturrehi/videos",
      },
      {
         name: "King Azoulay",
         description: "434k subscribers",
         image: man8,
         link: "https://www.youtube.com/@Kingazoulay",
      },
      {
         name: "Nathan Nazareth",
         description: "319k subscribers",
         image: man5,
         link: "https://www.youtube.com/@Nathannazareth/videos",
      },
      {
         name: "Mark Tilbury",
         description: "4,54M subscribers",
         image: man4,
         link: "https://www.youtube.com/@marktilbury",
      },
      {
         name: "MoVlogs",
         description: "11,6M subscribers",
         image: man9,
         link: "https://www.youtube.com/@MoVlogs/videos",
      },
      {
         name: "Hamza Ahmed",
         description: "2,3M subscribers",
         image: man3,
         link: "https://www.youtube.com/@Hamza97",
      },
      {
         name: "Sebastian Ghiorghiu",
         description: "1M subscribers",
         image: man2,
         link: "https://www.youtube.com/@sebb",
      },
   ];

   return (
      <section className="relative flex flex-col items-center text-center gap-3 sm:gap-8 mt-10 sm:mt-20 mb-12 sm:mb-[100px]">
         <HomeModal
            visible={isModaOpen}
            onClose={() => setIsModalOpen(false)}
         />

         <h3 className="pb-1 text-b1 sm:text-h3 text-gray-600 ">
            For Business YouTube Channels…
         </h3>

         <h1 className="pb-1 sm:max-w-[1090px] text-b2 sm:text-h1 font-bold">
            Are You Tired Of{" "}
            <span className="relative inline-block ">
               Thumbnails
               <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient--3 bg-[length:200%_200%] animate-gradientShift"></span>
            </span>{" "}
            That Deliver Absolutely ZERO Results?
         </h1>

         <p className="max-w-[310px] sm:max-w-[500px] text-overline2 text-gray-700 sm:text-b2">
            Our designs are field-tested and based on human psychology to
            transform your YouTube channel into a sales machine.
         </p>

         <AppButton onClick={() => setIsModalOpen(true)} width="220px">
            START NOW
         </AppButton>

         <Marquee
            speed={50}
            pauseOnHover
            className="bg-gradient--1 rounded-[50px] max-w-[950px] mt-9"
         >
            <ul className="flex gap-8 py-2 sm:py-5 pl-8">
               {data.map((item) => (
                  <Link
                     key={item.name}
                     href={item.link}
                     target="_blank"
                     className="flex gap-2 hover:scale-110 duration-150"
                  >
                     <Image
                        src={item.image}
                        alt={`Youtube channel ${item.name}`}
                        className="size-8 sm:size-[50px]"
                     />
                     <div className="text-start text-gray-700">
                        <h5 className="text-overline2 sm:text-b2 font-medium">
                           {item.name}
                        </h5>
                        <p className="text-overline1 sm:text-overline2">
                           {item.description}
                        </p>
                     </div>
                  </Link>
               ))}
            </ul>
         </Marquee>

         <CircleLeft className="absolute size-[430px] left-[-210px] top-[0px] -z-10" />
         <CircleRight className="absolute size-[520px] right-[-200px] top-[100px] -z-10" />
      </section>
   );
};

export default HomeHero;
