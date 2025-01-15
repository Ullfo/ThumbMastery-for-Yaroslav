import React, { useEffect, useState } from "react";

import AppModal from "@/components/AppModal/AppModal";
import AppButton from "@/components/AppButton/AppButton";
import TelegramAPI from "@/api/telegramAPI";
import AppSelectDropdown from "@/components/AppSelectDropdown/AppSelectDropdown";
import AppInput from "@/components/AppInput/AppInput";

type HomeModalProps = {
   visible: boolean;
   onClose: () => void;
};

//I CAN OPTIMIZE THIS COD LIKE SITEBAR HEARIFY, BUT... IF ANOTHER PROGRAMMER UNDERSTAND THIS? OR WILL BE IT READABLE?
const HomeModal: React.FC<HomeModalProps> = ({ visible, onClose }) => {
   const [radioAnswers, setRadioAnswers] = useState<string[]>([]);
   const [youTubeName, setYouTubeName] = useState<string>("");
   //ДО ІНПУТІВ СТЕЙТИ ДОДАЙ

   const [selectedValue, setSelectedValue] = useState<string>("");

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

   const mainData = [
      {
         type: "radio",
         name: "Do you create long-form vi deos on YouTube?",
         ranges: ["Yes", "No"],
      },
      {
         type: "radio",
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
         type: "radio",
         name: "How long have you been creating long-form videos?",
         ranges: [
            "Less than 1 year",
            "1-2 years",
            "2-5 years",
            "5-10 years",
            "10+ years",
         ],
      },
      {
         type: "dropdown",
         name: "Do you own a business? If yes, which of the following best describes it?",
         ranges: [
            "No, I don’t",
            "Yes, agency",
            "Yes, podcast",
            "Yes, e-commerce",
            "Yes, software",
            "Yes, entertainment",
            "Yes, consulting/coaching",
            "Yes, brick & mortar",
            "Yes, other",
         ],
      },
      {
         type: "dropdown",
         name: "Do you sell or offer a product or community to your audience?",
         ranges: [
            "No, I don’t",
            "Yes, product",
            "Yes, course",
            "Yes, community",
            "Yes, coaching",
            "Yes, other",
         ],
      },
      {
         type: "text",
         name: "What is your YouTube channel called?",
      },
      {
         type: "textarea",
         name: "In a few words, what is your channel about?",
      },
      {
         type: "dropdown",
         name: "What country do you live in?",
         ranges: [
            "USA",
            "UKRAINE",
            "lalalalal",
            "LULULULU",
            "LILILILI",
            "LELELELE",
         ],
      },
      {
         type: "name",
         name: "What’s your name?",
      },
      {
         type: "name",
      },
      {
         type: "phone",
         ranges: [
            "USA",
            "UKRAINE",
            "lalalalal",
            "LULULULU",
            "LILILILI",
            "LELELELE",
         ],
      },
      {
         type: "text",
         name: "What’s your email?",
      },
   ];

   const data2 = [
      //
      "alalalal",
      "lulululu",
      "lelelele",
   ];

   const sendToTelegram = (): void => {
      const messege = data
         .map(
            (item, index) =>
               `${index + 1}) ${item.name}:\n ${
                  radioAnswers[index] || "NO ANSWER"
               }`
         )
         .join("\n\n");

      TelegramAPI.sendMessege(messege)
         .then(() => console.log("good"))
         .catch(() => console.log("bad"));
   };

   const handleRadioAnswer = (index: number, value: string): void => {
      setRadioAnswers((prev) => {
         const updateAnswers = [...prev];
         updateAnswers[index] = value;
         return updateAnswers;
      });
   };

   const handleSelect = (value: string): void => {
      setSelectedValue(value);
   };

   const handleClose = (): void => {
      console.log("Dropdown closed");
   };

   useEffect(() => {
      if (visible) {
         return document.body.classList.add("overflow-hidden");
      }
      return document.body.classList.remove("overflow-hidden");
   }, [visible]);

   return (
      <AppModal width="1120px" visible={visible} onClose={onClose}>
         <h3 className="text-h3 font-bold mb-4">Apply Now to Work With Us</h3>
         <h4 className="text-h4 text-grey--600 mb-6">
            See If You Qualify and Join Our Waitlist
         </h4>

         <div className="max-h-[calc(100vh-200px)] overflow-y-auto mb-">
            <div className="pl-[270px] space-y-5 text-start mb-7">
               {data.map((question, index) => (
                  <form key={index} className="space-y-1 mb-5">
                     <h5>{question.name}</h5>
                     {question.ranges.map((range) => (
                        <div
                           key={range}
                           className="flex items-center gap-2 cursor-pointer"
                        >
                           <input
                              type="radio"
                              value={range}
                              className="w-5 h-5"
                              checked={radioAnswers[index] === range}
                              onChange={() => handleRadioAnswer(index, range)}
                           />
                           <span className="text-gray-700">{range}</span>
                        </div>
                     ))}
                  </form>
               ))}

               <AppSelectDropdown
                  label="Do you own a business? If yes, which of the following best describes it?"
                  width="280px"
                  value={selectedValue}
                  options={data2}
                  onSelect={(value) => setSelectedValue(value)}
                  onClose={handleClose}
               />

               <AppSelectDropdown
                  label="Do you sell or offer a product or community to your audience?"
                  width="280px"
                  value={selectedValue}
                  options={data2}
                  onSelect={handleSelect}
                  onClose={handleClose}
               />

               <AppInput
                  textarea
                  label="What is your YouTube channel called?"
                  value={youTubeName}
                  onChange={(e) => setYouTubeName(e.target.value)}
                  width="280px"
                  height="80px"
               />

               <AppSelectDropdown
                  label="What country do you live in?"
                  width="280px"
                  value={selectedValue}
                  options={data2}
                  onSelect={handleSelect}
                  onClose={handleClose}
               />

               <div className="space-y-2">
                  <AppInput
                     label="What’s your name?"
                     placeholder="First name"
                     value={""}
                     width="280px"
                  />
                  <AppInput //
                     placeholder="Last name"
                     value={""}
                     width="280px"
                  />
               </div>

               <div>
                  <h5 className="">What’s your phone number?</h5>
                  <div className="flex gap-5">
                     <AppSelectDropdown
                        value={selectedValue}
                        options={data2}
                        onSelect={handleSelect}
                        onClose={handleClose}
                        width="80px"
                     />
                     <AppInput //
                        type="tel"
                        value={""}
                        placeholder="asdasdasdas"
                        width="180px"
                     />
                  </div>
               </div>

               <AppInput //
                  type="email"
                  label="What’s your email?"
                  value={""}
                  width="280px"
               />

               <div className="flex items-center gap-2">
                  <input //
                     className="h-5 w-5"
                     name="checkbox"
                     type="checkbox"
                  />
                  <label htmlFor="checkbox">
                     I agree to the processing of personal data.
                  </label>
               </div>
            </div>
            <AppButton onClick={sendToTelegram} width="300px">
               APPLY
            </AppButton>
         </div>
      </AppModal>
   );
};

export default HomeModal;
