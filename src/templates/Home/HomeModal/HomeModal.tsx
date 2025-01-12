import React, { useState } from "react";

import AppModal from "@/components/AppModal/AppModal";
import AppButton from "@/components/AppButton/AppButton";
import TelegramAPI from "@/api/telegramAPI";

type HomeModalProps = {
   visible: boolean;
   onClose: () => void;
};

const HomeModal: React.FC<HomeModalProps> = ({ visible, onClose }) => {
   const [answers, setAnswers] = useState<string[]>([]);

   const data = [
      {
         name: "Do you create long-form vi deos on YouTube?",
         ranges: ["Yes", "No"],
      },
      {
         name: "How many subscribers do you have?",
         ranges: [
            "0 - 25,000",
            "25,000 - 100,000",
            "100,000 - 500,000",
            "500,000 - 1 million",
            "1 million - 2.5 million",
            "2.5 million +",
         ],
      },
      {
         name: "How long have you been creating long-form videos?",
         ranges: [
            "Less than 1 year",
            "1-2 years",
            "2-5 years",
            "5-10 years",
            "10+ years",
         ],
      },
   ];

   const sendToTelegram = (): void => {
      const messege = data
         .map(
            (item, index) =>
               `${index + 1}) ${item.name}:\n ${answers[index] || "NO ANSWER"}`
         )
         .join("\n\n");

      TelegramAPI.sendMessege(messege)
         .then(() => console.log("good"))
         .catch(() => console.log("bad"));
   };

   const handleAnswer = (index: number, value: string): void => {
      setAnswers((prev) => {
         const updateAnswers = [...prev];
         updateAnswers[index] = value;
         return updateAnswers;
      });
   };

   return (
      <AppModal width="1120px" visible={visible} onClose={onClose}>
         <div className="">
            <h3>Apply Now to Work With Us</h3>
            <h4 className="mb-6">See If You Qualify and Join Our Waitlist</h4>

            <div className="pl-72">
               {data.map((item, index) => (
                  <form key={index} className="space-y-2 mb-5">
                     <h5 className="text-start">{item.name}</h5>
                     {item.ranges.map((range) => (
                        <label
                           key={range}
                           className="flex items-center gap-2 cursor-pointer"
                        >
                           <input
                              type="radio"
                              name="radio"
                              value={range}
                              className="w-5 h-5"
                              checked={answers[index] === range}
                              onChange={() => handleAnswer(index, range)}
                           />
                           <span className="text-gray-700">{range}</span>
                        </label>
                     ))}
                  </form>
               ))}
            </div>
         </div>
         <AppButton onClick={sendToTelegram}>Push</AppButton>
      </AppModal>
   );
};

export default HomeModal;
