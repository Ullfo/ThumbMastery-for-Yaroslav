import React from "react";
import Image from "next/image";

import AppButton from "@/components/AppButton/AppButton";
import CircleIcon from "@/assets/images/circle-3.png";
import StarIcon from "@/assets/images/Star.png";

const HomeAbout: React.FC = () => {
   return (
      <section className="flex flex-col max-w-[1120px] mx-auto mb-[170px]">
         <div className="relative ml-auto">
            <Image
               className="absolute right-[620px] -top-[90px]"
               src={StarIcon}
               alt=""
               width={760}
               height={760}
            />
            <p className="text-h4 text-grey--500 max-w-[660px] pb-12">
               If YouTube is just a hobby for you, or you’re okay with spending
               hours on Photoshop making clickbait thumbnails,
               <strong className="text-secondary--700"> THUMBMASTERY</strong> is
               not the best fit for you.<br></br>
               <br></br> But if your case is the opposite, and you want to turn
               your YouTube channel into a sales machine and get paid for your
               knowledge - we’re here to help.<br></br>
               <br></br> YouTube has over 5 billion users, all constantly
               bombarded with countless videos, thumbnails, and titles. It’s
               become so competitive that getting viewers to click your video is
               now a
               <strong className="text-secondary--700"> HARD SCIENCE</strong>.
               <br></br>
               <br></br> It's time to grab, retain, and monetize their attention
               with premium packaging.
            </p>
            <AppButton variant="secondary" width="440px">
               BECOME YOUR INDUSTRY LEADER
            </AppButton>
         </div>
         <h3 className="mt-28 mb-16 text-h2 font-bold">About Thumbmastery</h3>
         <div className="relative">
            <Image
               className="absolute left-[500px] -top-[130px]"
               src={CircleIcon}
               alt=""
               width={780}
               height={780}
            />
            <p className="text-h4 text-grey--500 max-w-[550px] pb-12">
               <strong className="text-secondary--700">THUMBMASTERY</strong> is
               a YouTube thumbnail design and video packaging agency that helps
               business owners grow their YouTube channels. We specialize in
               increasing views, CTR, and revenue by improving the quality of
               your video packaging.<br></br>
               <br></br> Since we started, we’ve helped the top 1% of business
               YouTube channels generate over 493 million views, $1.7M in
               revenue, and hundreds of thousands of subscribers.
               <br></br>
               <br></br> We combine viewer psychology, data-driven strategies,
               and split-testing to grab, retain, and monetize the attention of
               your ideal audience.
            </p>
            <AppButton width="320px">WORK WITH US</AppButton>
         </div>
      </section>
   );
};

export default HomeAbout;
