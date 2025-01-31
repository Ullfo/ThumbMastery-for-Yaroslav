import React, { useState } from "react";

import HomeHero from "./HomeHero/HomeHero";
import HomeFAQ from "./HomeFAQ/HomeFAQ";
import HomeBring from "./HomeBring/HomeBring";
import HomeChannels from "./HomeChannels/HomeChannels";
import HomeOurwork from "./HomeOurwork/HomeOurwork";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home: React.FC = () => {
   return (
      <div>
         <HomeHero />
         <HomeChannels />
         <HomeBring />
         <HomeOurwork />
         <HomeSteps />
         <HomeAbout />
         <HomeFAQ />
      </div>
   );
};

export default Home;
