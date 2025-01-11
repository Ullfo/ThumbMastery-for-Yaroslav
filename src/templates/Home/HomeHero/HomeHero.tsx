import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import AppButton from "@/components/AppButton/AppButton";
import Man from "@/assets/images/man1.png";

const HomeHero: React.FC = () => {
   const data = [
      {
         name: "MoVlogs",
         description: "11,6M subscribers",
         image: Man,
      },
      {
         name: "Mark Tilbury",
         description: "3,69M subscribers",
         image: Man,
      },
      {
         name: "Nathan Nazareth",
         description: "319k subscribers",
         image: Man,
      },
      {
         name: "Hamza Ahmed",
         description: "2,3M subscribers",
         image: Man,
      },
      {
         name: "Sebastian Ghiorghiu",
         description: "1M subscribers",
         image: Man,
      },
   ];

   return (
      <section className="relative flex flex-col items-center text-center gap-8 mt-20 mb-[100px]">
         <h3 className="pb-1 text-h3 text-gray-600 font-normal">
            For Business YouTube Channels…
         </h3>

         <h1 className="pb-1 max-w-[1090px] text-h1 font-bold">
            Are You Tired Of{" "}
            <span className="relative inline-block">
               Thumbnails
               <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient--3"></span>
            </span>
            That Deliver Absolutely ZERO Results?
         </h1>

         <p className="max-w-[500px] text-b2">
            Our designs are field-tested and based on human psychology to
            transform your YouTube channel into a sales machine.
         </p>

         <AppButton width="220px">START NOW</AppButton>

         <Marquee
            speed={50}
            pauseOnHover
            className="bg-gradient--1 rounded-[50px] max-w-[950px] mt-9"
         >
            <ul className="flex gap-8 py-5 pl-8">
               {data.map((item) => (
                  <Link href="/" className="flex gap-2">
                     <Image src={item.image} alt="" width={50} height={50} />
                     <div>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                     </div>
                  </Link>
               ))}
            </ul>
         </Marquee>
      </section>
   );
};

export default HomeHero;
