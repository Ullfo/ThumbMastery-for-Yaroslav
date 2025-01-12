import React from "react";
import Image from "next/image";

import AppButton from "@/components/AppButton/AppButton";
import VideoImage from "@/assets/images/lalala.png";
import Avatar from "@/assets/images/man1.png";

const HomeOurwork: React.FC = () => {
   const data = [
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me” - Dwayne Johnson Opens Up On Trump, Hollywood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me, Hollywood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me” - Dwayne Johnson Opens Up On Trumood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me” - Dwayne JohnsonUp On Trump, Hollywood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me” - Dwayne Johnson Opens Up On Trump, Hollywood, Vince McMahon",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can Stop Me” - Dwayne Joh Trump, Hollywood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
      {
         image: VideoImage,
         avatar: Avatar,
         title: "“No One Can  - Dwayne Johnson Opens Up On Trump, Hollywood, Vince McMahon & Father",
         changel: "PBD Podcast",
         views: "740k views",
      },
   ];

   return (
      <section className="flex flex-col items-center">
         <h3 className="pb-4 text-center text-h2 font-bold">Our work</h3>
         <h4 className="pb-12 text-center text-h3 font-medium">
            Recent thumbnails designed for top business channels.
         </h4>

         <ul className="flex gap-4 mb-10 -mr-12 overflow-x-scroll scrollbar-hide">
            {data.map((item) => (
               <li key={item.title} className="flex-shrink-0">
                  <Image
                     className="pb-3 rounded-[42px]"
                     src={item.image}
                     alt=""
                     width={490}
                     height={280}
                  />
                  <div className="flex items-start gap-2 max-w-[490px]">
                     <Image src={item.avatar} alt="" width={42} height={42} />
                     <div className="text-grey--500">
                        <h5 className="pb-1 font-bold text-b1">{item.title}</h5>
                        <div className="flex justify-between font-medium text-b1 bg-primary--50 rounded-md px-[6px] p-[2px]">
                           <p>{item.changel}</p>
                           <p>{item.views}</p>
                        </div>
                     </div>
                  </div>
               </li>
            ))}
         </ul>

         <ul className="flex gap-4 mb-[120px] -ml-12 flex-row-reverse overflow-x-scroll scrollbar-hide">
            {data.map((item) => (
               <li key={item.title} className="flex-shrink-0">
                  <Image
                     className="pb-3 rounded-[42px]"
                     src={item.image}
                     alt=""
                     width={490}
                     height={280}
                  />
                  <div className="flex items-start gap-2 max-w-[490px]">
                     <Image src={item.avatar} alt="" width={42} height={42} />
                     <div className="text-grey--500">
                        <h5 className="pb-1 font-bold text-b1">{item.title}</h5>
                        <div className="flex justify-between font-medium text-b1 bg-primary--50 rounded-md px-[6px] p-[2px]">
                           <p>{item.changel}</p>
                           <p>{item.views}</p>
                        </div>
                     </div>
                  </div>
               </li>
            ))}
         </ul>

         <div className="flex flex-col items-center gap-7 py-12 px-64 mb-[100px] bg-gradient--2 rounded-[32px]">
            <h3 className="text-h2 text-center font-bold ">Get started now</h3>
            <AppButton>BOOK A CALL</AppButton>
         </div>
      </section>
   );
};

export default HomeOurwork;
