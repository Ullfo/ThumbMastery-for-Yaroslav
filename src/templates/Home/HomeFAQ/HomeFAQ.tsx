"use client";
import React, { useState } from "react";

import AppDropdown from "@/components/AppDropdown/AppDropdown";
import AppButton from "@/components/AppButton/AppButton";
import CircleIcon from "@/assets/icons/circle.svg";
import HomeModal from "../HomeModal/HomeModal";

const HomeFAQ: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const data = [
      {
         title: "Why are thumbnails important?",
         description:
            "Thumbnails are the first impression of your video. A well-designed thumbnail grabs attention, increases click-through rates (CTR), and ultimately helps grow your audience and revenue.",
      },
      {
         title: "How do you design thumbnails that increase clicks and sales?",
         description:
            "We use a combination of human psychology, data-driven strategies, and proven design principles to create thumbnails that attract your target audience and lead to more clicks and conversions.",
      },
      {
         title: "What’s your turnaround time?",
         description:
            "Typically, we deliver thumbnails within 24-48 hours, depending on the complexity of the thumbnail.",
      },
      {
         title: "What if I don’t like the thumbnail?",
         description:
            "We offer unlimited revisions to make sure you’re happy with the final design every time.",
      },
      {
         title: "How much do I need to be involved?",
         description:
            "Your involvement is minimal. Depending on the style of thumbnails of your channel, we might need assets (photos of yourself). Otherwise we just need information on what the video is about - and that’s it! If you want to be more involved, you can, but it’s not required",
      },
      {
         title: "Can you help with titles as well?",
         description:
            "Yes, we’ll also completely take care of your titles. We’ll come up with many different titles for each video & split-test them along with the thumbnail variations.",
      },
      {
         title: "Is your service subscription-based?",
         description:
            "Yes, we offer subscription-based services for clients who upload regularly, ensuring your channel maintains a consistent and professional look.",
      },
      {
         title: "How much does your service cost?",
         description:
            "Our pricing varies depending on each client's specific needs. Please fill out the form, and we’ll get back to you as soon as possible.",
      },
      {
         title: "Do you offer refunds?",
         description: " No, we do not offer refunds.",
      },
      {
         title: "What is ‘video packaging’?",
         description:
            "Video packaging refers to all the visual elements that represent your video on YouTube, including the thumbnail design & video title.",
      },
   ];
   return (
      <section
         id="faq"
         className="flex flex-col items-center mb-12 sm:mb-[100px]"
      >
         <HomeModal
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
         />

         <h3 className="text-b2 sm:text-h2 text-center font-medium sm:font-bold pb-3 sm:pb-10">
            Frequently Asked Questions
         </h3>
         <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 mb-12 sm:mb-[100px]">
            {data.map((item) => (
               <AppDropdown
                  key={item.title}
                  title={item.title}
                  content={item.description}
               />
            ))}
         </div>
         <div className="relative flex flex-col items-center gap-4 sm:gap-7 py-5 sm:py-12 px-2 sm:px-8 w-full max-w-[290px] sm:max-w-[936px] rounded-[20px] sm:rounded-[32px] bg-gradient--2 bg-[length:300%_100%] animate-gradientShift">
            <h3 className="text-b2 sm:text-h2 text-grey--700 text-center font-bold max-w-64 sm:max-w-none">
               Ready to start working with us?
            </h3>
            <AppButton
               onClick={() => setIsModalOpen(true)}
               className="w-[140px] sm:w-[250px]"
            >
               START NOW
            </AppButton>
            <CircleIcon className="absolute size-[110px] sm:size-[320px] -left-12 sm:left-[-140px] -top-9 sm:top-[-80px] -z-10" />
            <CircleIcon className="absolute size-[150px] sm:size-[320px] -right-16 sm:right-[-120px] top-[70px] sm:top-[60px] -z-10" />
         </div>
      </section>
   );
};

export default HomeFAQ;
