"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import Icon from "@/assets/images/man1.png";
import AppButton from "@/components/AppButton/AppButton";

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
         title: "493M+",
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
         image: Icon,
         name: "Azoulay",
         description: "blablabla",
      },
      {
         video: "/videos/MoVlogs.mp4",
         image: Icon,
         name: "MoVlogs",
         description: "11,6M subscribers",
      },
      {
         video: "/videos/ArturRehi.mp4",
         image: Icon,
         name: "Artur Rehi",
         description: "708k subscribers",
      },
      {
         video: "/videos/NathanNazareth.mp4",
         image: Icon,
         name: "Nathan Nazareth",
         description: "319k subscribers",
      },
      {
         video: "/videos/AhmadMahmood.mp4",
         image: Icon,
         name: "Ahmad Mahmood",
         description: "176k subscribers",
      },
      {
         video: "/videos/HarryBray.mp4",
         image: Icon,
         name: "Harry Bray",
         description: "blablabla",
      },
      {
         video: "/videos/MikeyMelin.mp4",
         image: Icon,
         name: "Mikey Melin",
         description: "blablabla",
      },
   ];

   return (
      <section className="flex flex-col items-center mb-[130px] -mx-12">
         <h3 className="pb-12 text-h3 font-medium text-grey--800">
            Trusted by YouTube’s biggest business channels
         </h3>
         <ul className="flex gap-5">
            {topData.map((item) => (
               <li
                  key={item.title}
                  className="flex flex-col text-center gap-[10px] py-14 px-4 bg-primary--50 rounded-[48px] w-64"
               >
                  <h4 className="text-h2 font-bold text-grey--700">
                     {item.title}
                  </h4>
                  <p className="text-b2 font-medium text-grey--600">
                     {item.description}
                  </p>
               </li>
            ))}
         </ul>

         <Marquee
            speed={30}
            pauseOnHover
            className="flex overflow-hidden py-[100px]"
         >
            {botData.map((item) => (
               <li
                  key={item.name}
                  className="mx-2 list-none duration-100 hover:-translate-y-5"
               >
                  <video
                     className="overflow-hidden rounded-[20px]"
                     height={550}
                     width={324}
                     controls
                     autoPlay
                     muted
                     loop
                     onMouseEnter={(e) => (e.currentTarget.muted = false)}
                     onMouseLeave={(e) => (e.currentTarget.muted = true)}
                  >
                     <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="flex items-center gap-3  pl-2 pt-7">
                     <Image src={item.image} alt="" width={52} height={52} />
                     <div>
                        <h5 className="text-h4 font-semibold">{item.name}</h5>
                        <p className="text-b1">{item.description}</p>
                     </div>
                  </div>
               </li>
            ))}
         </Marquee>

         <div>
            <h3 className="pb-11 max-w-[1000px] text-h3 font-bold text-grey--700">
               Every Tom, Dick, and Harry makes clickbait thumbnails, but the
               ones that actually drive sales focus on viewer psychology and
               proven, data-driven strategies.
            </h3>
            <p className="pb-9 max-w-[860px] text-h4 text-grey--500">
               Don't waste your time struggling to make a thumbnail, only for it
               to flop.
               <br />
               <br /> No matter how good your content is, viewers won’t click
               unless you give them a reason to do so.
               <br />
               <br />
               Attention spans get shorter by the day, so your goal must be to
               hook your ideal viewer from the start and keep them engaged until
               they buy your products and services.
            </p>
            <AppButton width="370px">BOOST YOUR SALES</AppButton>
         </div>
      </section>
   );
};

export default HomeChannels;
