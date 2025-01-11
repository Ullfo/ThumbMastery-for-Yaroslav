import React from "react";

import AppDropdown from "@/components/AppDropdown/AppDropdown";
import AppButton from "@/components/AppButton/AppButton";

const HomeFAQ: React.FC = () => {
   const data = [
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
   ];
   return (
      <section className="flex flex-col items-center mb-[100px]">
         <h3 className="font-poppins text-h2 text-center font-bold pb-10">
            Frequently Asked Questions
         </h3>
         <div className="grid grid-cols-2 gap-4 mb-[100px]">
            {data.map((item) => (
               <AppDropdown title={item.title} content={item.description} />
            ))}
         </div>

         <div className="flex flex-col items-center gap-7 py-12 px-44 bg-gradient--2 rounded-[32px]">
            <h3 className="text-h2 text-grey--700 text-center font-bold ">
               Ready to start working with us?
            </h3>
            <AppButton width="250px">START NOW</AppButton>
         </div>
      </section>
   );
};

export default HomeFAQ;
